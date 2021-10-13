import { Request, Response } from "express";
import { CreateAccountService } from "../Services/CreateAccountService";

class CreateAccountsController {
  async handle(request: Request, response: Response) {
    const { title, login, password, extras, category } = request.body;

    const createAccountsService = new CreateAccountService();

    const account = await createAccountsService.execute({
      id_user: request.user_id,
      title,
      login,
      password,
      extras,
      category,
    });

    return response.json(account);
  }
}

export { CreateAccountsController };
