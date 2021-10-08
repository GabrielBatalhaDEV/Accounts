import { Request, Response } from "express";
import { ChangePasswordService } from "../Services/ChangePasswordService";

class ChangePasswordController {
  async handle(request: Request, response: Response) {
    const { password, new_password } = request.body;
    const { user_id: id } = request;

    const changePasswordService = new ChangePasswordService();

    const user = await changePasswordService.execute({
      id,
      password,
      new_password,
    });

    return response.json(user);
  }
}

export { ChangePasswordController };
