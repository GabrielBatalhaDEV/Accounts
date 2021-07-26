import { getCustomRepository } from "typeorm"
import { AccountsRepositories } from "../Repositories/AccountsRepositories"

interface IAccountRequest{
    id_user: string,
    title: string,
    login?: string,
    password?: string,
    extras?: string
}


class CreateAccountService{

    async execute({id_user, title, login, password, extras}: IAccountRequest){

        if(!title){
            throw new Error("Unexpected Title")
        }

        const accountsRepositories = getCustomRepository(AccountsRepositories)

        const accounts = accountsRepositories.create({
            id_user,
            title,
            login,
            password,
            extras
        })

        await accountsRepositories.save(accounts)

        return accounts

    }
}

export {CreateAccountService}