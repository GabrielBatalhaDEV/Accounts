import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  email: string;
  password: string;
}

class CreateUsersService {
  async execute({ email, password }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!email || !password) {
      throw { message: "Empty Field(s)" };
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw { message: "User Already Exists" };
    }

    const hash_password = await hash(password, 8);

    const user = userRepository.create({
      email,
      password: hash_password,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUsersService };
