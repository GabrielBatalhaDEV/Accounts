import { Request, Response } from "express"
import { DeleteAccountService } from "../Services/DeleteAccountService"


class DeleteAccountController{
    async handle(request: Request, response: Response){

        const {id} = request.params
        const {user_id} = request

        const deleteAccountService = new DeleteAccountService()

        const account = await deleteAccountService.execute({id,user_id})

        return response.json(account)

    }
}

export {DeleteAccountController}