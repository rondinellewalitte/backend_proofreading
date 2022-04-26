import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { sign, verify } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";

dayjs.extend(utc);

interface IRefreshToken {
  refresh_token: string;
}

interface IPayload {
  sub: string;
  email: string;
}

interface IResponse {
  user: {
    username: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}

export class RefreshTokenUseCase {
  async execute({ refresh_token }: IRefreshToken) {
    const { sub, email } = verify(
      refresh_token,
      process.env.SECRET_REFRESH_TOKEN
    ) as IPayload;

    const user_id = sub;

    const userTokens = await prisma.usersTokens.findFirst({
      where: { user_id, refresh_token },
    });

    if (!userTokens) {
      throw new Error("Refresh Token does not exist");
    }

    await prisma.usersTokens.delete({ where: { id: userTokens.id } });

    const client = await prisma.user.findFirst({
      where: { email },
    });

    const refresh_token_new = sign(
      { email },
      process.env.SECRET_REFRESH_TOKEN,
      {
        subject: client.id,
        expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
      }
    );

    const token = sign({ email }, process.env.TOKEN_BCRIPT, {
      subject: client.id,
      expiresIn: process.env.EXPIRES_IN_TOKEN,
    });

    const expires_in = dayjs().add(30, "days").toDate();

    const refreshToken = await prisma.usersTokens.create({
      data: {
        refresh_token: refresh_token_new,
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
