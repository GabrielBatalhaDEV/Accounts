import { getCustomRepository } from "typeorm";
import { AccountsRepositories } from "../Repositories/AccountsRepositories";

interface IAccountRequest {
  id: string;
  id_user: string;
}

class DeleteAccountService {
  async execute({ id, id_user }: IAccountRequest) {
    const accountRepository = getCustomRepository(AccountsRepositories);

    const account = await accountRepository.findOne({
      where: {
        id,
        id_user,
      },
    });

    if (!account) {
      throw new Error("Account doesnt exists");
    }

    await accountRepository.delete(id);

    return account;
  }
}

export { DeleteAccountService };
