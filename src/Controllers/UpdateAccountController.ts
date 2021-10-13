import { Request, Response } from "express";
import { UpdateAccountService } from "../Services/UpdateAccountService";

class UpdateAccountController {
  async handle(request: Request, response: Response) {
    const { title, login, password, extras, category } = request.body;

    const { user_id } = request;

    const { id } = request.params;

    const updateAccountService = new UpdateAccountService();

    const account = await updateAccountService.execute({
      id,
      title,
      login,
      password,
      extras,
      user_id,
      category,
    });

    return response.json(account);
  }
}

export { UpdateAccountController };
