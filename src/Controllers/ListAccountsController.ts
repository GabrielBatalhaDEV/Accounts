import { Request, Response } from "express";
import { ListAccountsService } from "../Services/ListAccountsService";


class ListAccountsController{
    async handle(request: Request, response: Response){

        const listAccountsService = new ListAccountsService()

        const accounts = await listAccountsService.execute(request.user_id)

        return response.json(accounts)
        
    }
}

export {ListAccountsController}