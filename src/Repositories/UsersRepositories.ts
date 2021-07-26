import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";

@EntityRepository(Users)
class UsersRepositories extends Repository<Users>{

}

export {UsersRepositories}