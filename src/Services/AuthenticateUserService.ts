import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../Repositories/UsersRepositories"
import {secret} from "../../secret.json"

interface ILoginRequest{
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute(
        {email,password}: ILoginRequest
    ){

        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({email})

        if(!user){
            throw new Error("Email/Password Incorrect")
        }

        const pass_match = await compare(password, user.password)

        if(!pass_match){
            throw new Error("Email/Password Incorrect")
        }

        const token = sign({
            user: user.email
        },
        secret,
        {
            subject:user.id,
            expiresIn: "1d"
        })

        return token

    }
}

export { AuthenticateUserService }