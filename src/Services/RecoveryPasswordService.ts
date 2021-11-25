import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";

interface IRequestUser {
  password: string;
  id: string;
}

class RecoveryPasswordService {
  async execute({ password, id }: IRequestUser) {
    const userRepository = getCustomRepository(UsersRepositories);

    const userExists = await userRepository.findOne({ id });

    if (!userExists) {
      throw { message: "User not found!" };
    }

    const hash_password = await hash(password, 8);

    const user = userRepository.create({
      id,
      email: userExists.email,
      password: hash_password,
    });

    await userRepository.save(user);

    return user;
  }
}

export { RecoveryPasswordService };
