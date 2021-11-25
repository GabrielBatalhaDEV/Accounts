import { getCustomRepository } from "typeorm";
import { AccountsRepositories } from "../Repositories/AccountsRepositories";
import { UsersRepositories } from "../Repositories/UsersRepositories";

class ListAccountsService {
  async execute(id_user: string) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const accountsRepository = getCustomRepository(AccountsRepositories);

    const userExists = await usersRepository.findOne({ id: id_user });

    if (!userExists) {
      throw { message: "User Invalid" };
    }

    const accounts = await accountsRepository.find({ id_user });

    return accounts;
  }
}

export { ListAccountsService };
