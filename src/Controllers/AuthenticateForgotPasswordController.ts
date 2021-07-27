import { Request, Response } from "express";
import { AuthenticateForgotPasswordService } from "../Services/AuthenticateForgotPasswordService";


class AuthenticateForgotPasswordController {

    async handle(request: Request, response: Response){
        
        const {email} = request.body
        
        const authenticateForgotPasswordService = new AuthenticateForgotPasswordService()

        const token = await authenticateForgotPasswordService.execute(email)

        return response.json({token})

    }
} 


export {AuthenticateForgotPasswordController}