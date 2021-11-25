import { getCustomRepository } from "typeorm";
import { AccountsRepositories } from "../Repositories/AccountsRepositories";

interface IAccountRequest {
  id: string;
  title: string;
  login: string;
  password: string;
  extras: string;
  user_id: string;
  category: string;
}

class UpdateAccountService {
  async execute({
    id,
    title,
    login,
    password,
    extras,
    user_id,
    category,
  }: IAccountRequest) {
    const accountRepository = getCustomRepository(AccountsRepositories);

    const authUser = await accountRepository.findOne({
      where: {
        id,
        id_user: user_id,
      },
    });

    if (!authUser) {
      throw { message: "Account doesnt exists" };
    }

    const account = accountRepository.create({
      id,
      title,
      login,
      password,
      extras,
      category,
    });

    await accountRepository.save(account);

    return account;
  }
}

export { UpdateAccountService };
