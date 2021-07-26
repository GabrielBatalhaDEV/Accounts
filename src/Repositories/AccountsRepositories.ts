import { EntityRepository, Repository } from "typeorm";
import { Accounts } from "../entities/Accounts";

@EntityRepository(Accounts)
class AccountsRepositories extends Repository<Accounts>{

}

export {AccountsRepositories}