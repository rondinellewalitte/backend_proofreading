import { compare } from "bcrypt";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

dayjs.extend(utc);

interface IAuthenticateClient {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}

export class AuthenticateClientUseCase {
  async execute({ email, password }: IAuthenticateClient) {
    const client = await prisma.user.findFirst({
      where: { email },
    });

    if (!client) {
      throw new Error("Email or password is invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Email or password is invalid!");
    }

    const token = sign({ email }, process.env.TOKEN_BCRIPT, {
      subject: client.id,
      expiresIn: process.env.EXPIRES_IN_TOKEN,
    });

    const refresh_token = sign({ email }, process.env.SECRET_REFRESH_TOKEN, {
      subject: client.id,
      expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
    });

    const expires_in = dayjs().add(30, "days").toDate();

    const refreshToken = await prisma.usersTokens.create({
      data: {
        refresh_token,
        user_id: client.id,
        expires_in,
      },
    });

    const tokenReturn: IResponse = {
      token,
      refresh_token: refreshToken.refresh_token,
      user: {
        username: client.username,
        email: client.email,
      },
    };

    return tokenReturn;
  }
}
