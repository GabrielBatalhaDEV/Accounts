import { Request, Response } from "express";
import { CreateAccountService } from "../Services/CreateAccountService";

class CreateAccountsController {
  async handle(request: Request, response: Response) {
    const { title, login, password, extras, categories } = request.body;

    const createAccountsService = new CreateAccountService();

    const account = await createAccountsService.execute({
      id_user: request.user_id,
      title,
      login,
      password,
      extras,
      categories,
    });

    return response.json(account);
  }
}

export { CreateAccountsController };
