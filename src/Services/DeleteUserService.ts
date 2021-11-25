import { getCustomRepository } from "typeorm";
import { AccountsRepositories } from "../Repositories/AccountsRepositories";
import { UsersRepositories } from "../Repositories/UsersRepositories";

interface IUserRequest {
  id: string;
}

class DeleteUserService {
  async execute({ id }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);
    const accountsRepositories = getCustomRepository(AccountsRepositories);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw { message: "User doesnt exists!" };
    }

    const accounts = await accountsRepositories.find({
      where: { id_user: id },
    });

    const accountsId = accounts.map((account) => account.id);

    await accountsRepositories.delete(accountsId);
    await userRepository.delete(id);

    return user;
  }
}

export { DeleteUserService };
