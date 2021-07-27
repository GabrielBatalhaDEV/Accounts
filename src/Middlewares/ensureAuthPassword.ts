import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import {secret} from '../Config/auth.json'

interface IPayload{
    sub: string,
    method: string
}

function ensureAuthPassword(request: Request, response: Response, next: NextFunction){

    const request_token = request.headers.authorization

    if(!request_token){
        return response.status(401).json({error: "Invalid Token"})
    }

    const [,token] = request_token.split(" ")

    if(!token){
        return response.status(401).json({error: "Invalid Token"})
    }

    try {
        
        const {sub, method} = verify(token,secret)  as IPayload

        if(!(method === "forgot_password")){
            return response.status(401).json({error: "Invalid Token"})
        }

        request.user_id = sub
        request.method = method

        next()
    } catch (error) {
        return response.status(401).json({error: "Invalid Token"})
    }

}

export {ensureAuthPassword}