import { Request, Response } from "express";
import { DeleteAccountService } from "../Services/DeleteAccountService";

class DeleteAccountController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { user_id: id_user } = request;

    const deleteAccountService = new DeleteAccountService();

    const account = await deleteAccountService.execute({ id, id_user });

    return response.json(account);
  }
}

export { DeleteAccountController };
