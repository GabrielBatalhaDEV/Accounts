import { getCustomRepository } from "typeorm";
import { AccountsRepositories } from "../Repositories/AccountsRepositories";
import { UsersRepositories } from "../Repositories/UsersRepositories";
interface IAccountRequest {
  id?: string;
  title?: string;
  category?: string;
  user_id: string;
}

function removeEmpty(obj: Object) {
  const objWithoutEmpty = Object.entries(obj).reduce(
    (a, [k, v]) => (!v ? a : ((a[k] = v), a)),
    {}
  );

  return objWithoutEmpty;
}

class GetAccountService {
  async execute({ id, title, category, user_id: id_user }: IAccountRequest) {
    const userRepository = getCustomRepository(UsersRepositories);
    const accountRepository = getCustomRepository(AccountsRepositories);

    const user = await userRepository.findOne(id_user);

    if (!user) {
      throw new Error("User Invalid");
    }

    const whereQuery = removeEmpty({ id, title, category, id_user });

    const accounts = await accountRepository.find({
      where: whereQuery,
    });

    return accounts;
  }
}

export { GetAccountService };
