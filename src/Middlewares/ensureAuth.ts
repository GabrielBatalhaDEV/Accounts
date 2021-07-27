import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import {secret} from "../Config/auth.json"

interface IPayload{
    sub: string,
    method: string
}


function ensureAuth(request: Request, response: Response, next: NextFunction){

    const req_token = request.headers.authorization

    if(!req_token){
        return response.status(401).json({error: "Invalid Token"})
    }

    const [,token] = req_token.split(" ")

    if(!token){
        return response.status(401).json({error: "Invalid Token"})
    }

    try {
        
        const {sub, method} = verify(token,secret) as IPayload

        if(method){
            return response.status(401).json({error: "Invalid Token1"})
        }

        request.user_id = sub
        
        next()

    } catch (error) {
        return response.status(401).json({error: "Invalid Token"})
    }
}

export {ensureAuth}