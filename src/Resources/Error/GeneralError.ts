import { Request, Response, NextFunction } from "express";

interface IError {
  message: string;
  status: number;
}

export function GeneralError(
  { message, status = 400 }: IError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  return response.status(status).json({
    error: message,
  });
}
