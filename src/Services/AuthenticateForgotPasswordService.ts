import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";
import { secret } from "../Config/auth.json";
import { transport } from "../Modules/mailer";

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
        method: "forgot_password",
      },
      secret,
      {
        subject: user.id,
        expiresIn: "1h",
      }
    );

    transport.sendMail(
      {
        headers: {
          token: token,
        },
        to: email,
        from: "no-reply@keepyouraccounts.com",
        subject: "KeepYourAccounts <Recovery Password>",
        html: `
      <body>
      <div style="display: block">
          <p>Esse é seu token:</p>
          ${token}
      </body>
    `,
      },
      (err) => {
        throw new Error("Cannot send forgot password email");
      }
    );

    return "Email sent";
  }
}

export { AuthenticateForgotPasswordService };
