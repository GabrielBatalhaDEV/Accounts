import { Request, Response } from "express";
import { CreateUsersService } from "../Services/CreateUsersService";


class CreateUsersController{

    async handle(request: Request, response: Response){

        const {email, password} = request.body
        
        const createUserService = new CreateUsersService()

        const user = await createUserService.execute({email, password})

        return response.json(user)

    }

}

export { CreateUsersController }