import { Request } from "express";
import { Response } from "express";
import { DeleteUserService } from "../Services/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { user_id: id } = request;
    const deleteUserService = new DeleteUserService();

    const user = await deleteUserService.execute({ id });

    response.json(user);
  }
}

export { DeleteUserController };
