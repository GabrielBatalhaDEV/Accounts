import { hash, compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";

interface IRequestUser {
  new_password: string;
  password: string;
  id: string;
}

class ChangePasswordService {
  async execute({ password, id, new_password }: IRequestUser) {
    const userRepository = getCustomRepository(UsersRepositories);

    const userExists = await userRepository.findOne({ id });

    if (!userExists) {
      throw { message: "User not found!" };
    }

    const pass_match = await compare(password, userExists.password);

    if (!pass_match) {
      throw { message: "Password Incorrect" };
    }

    const hash_password = await hash(new_password, 8);

    const user = userRepository.create({
      id,
      email: userExists.email,
      password: hash_password,
    });

    await userRepository.save(user);

    return user;
  }
}

export { ChangePasswordService };
