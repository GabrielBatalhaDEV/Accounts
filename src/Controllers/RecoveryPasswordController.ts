import { Request, Response } from "express";
import { RecoveryPasswordService } from "../Services/RecoveryPasswordService";


class RecoveryPasswordController{

    async handle(request: Request, response: Response){

        const { password } = request.body
        const {user_id: id} = request

        const recoveryPasswordService = new RecoveryPasswordService()

        const user = await recoveryPasswordService.execute({password, id})

        return response.json(user)
    }
}


export {RecoveryPasswordController}