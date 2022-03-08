import { Request, Response } from "express";
import { GetAccountService } from "../Services/GetAccountService";

class GetAccountController {
  async handle(request: Request, response: Response) {
    let { id } = request.params;

    const { user_id } = request;

    const getAccountService = new GetAccountService();

    const account = await getAccountService.execute({
      id,
      user_id,
    });

    response.json(account);
  }
}

export { GetAccountController };
