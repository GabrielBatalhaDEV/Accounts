import { Request, Response } from "express";
import { GetAccountService } from "../Services/GetAccountService";

class GetAccountController {
  async handle(request: Request, response: Response) {
    let { id } = request.params;
    if (!id) {
      id = request.body.id;
    }

    const { user_id } = request;
    const { title, category } = request.body;

    const getAccountService = new GetAccountService();

    const account = await getAccountService.execute({
      id,
      title,
      category,
      user_id,
    });

    response.json(account);
  }
}

export { GetAccountController };
