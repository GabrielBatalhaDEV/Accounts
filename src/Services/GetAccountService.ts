import { getCustomRepository } from "typeorm";
import { AccountsRepositories } from "../Repositories/AccountsRepositories";
import { UsersRepositories } from "../Repositories/UsersRepositories";
interface IAccountRequest {
  id: string;
  user_id: string;
}
class GetAccountService {
  async execute({ id, user_id: id_user }: IAccountRequest) {
    const userRepository = getCustomRepository(UsersRepositories);
    const accountRepository = getCustomRepository(AccountsRepositories);

    const user = await userRepository.findOne(id_user);

    if (!user) {
      throw { message: "User Invalid" };
    }


    const accounts = await accountRepository.findOne(id);

    if (!accounts) {
      throw { message: "ID Invalid" };
    }


    return accounts;
  }
}

export { GetAccountService };
