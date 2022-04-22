import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.user.findFirst({
      where: { username },
    });

    if (!client) {
      throw new Error("Username or password is invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password is invalid!");
    }

    const token = sign({ username }, process.env.TOKEN_BCRIPT, {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
