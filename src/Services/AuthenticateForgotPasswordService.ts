import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";
import { secret } from "../Config/auth.json";
import {transport} from '../Modules/mailer'

class AuthenticateForgotPasswordService {
  async execute(email: string) {
    const userRepository = getCustomRepository(UsersRepositories);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error("Email doesnt exists");
    }

    const token = sign(
      {
        email: user.email,
        method: "forgot_password"
      },
      secret,
      {
        subject: user.id,
        expiresIn: "1h"
      }
    );

    transport.sendMail({
      to: email,
      from: "Gabriel@accounts.com",
      subject: "forgot passowrd",
      html: `<!DOCTYPE html>
      <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
      <div style="display: block">
          <p>Esse é seu token:</p>
          ${token}
      </div>
      </body>
      </html>`
    },(err)=>{
      throw new Error("Cannot send forgot password email")
    })
      
    return "Email sent"
  }
}

export { AuthenticateForgotPasswordService };
