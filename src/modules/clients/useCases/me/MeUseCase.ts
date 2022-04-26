import { verify } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";

interface IMe {
  token: string;
}

interface IPayload {
  sub: string;
}

export class MeUseCase {
  async execute({ token }: IMe) {
    const { sub } = verify(token, process.env.TOKEN_BCRIPT) as IPayload;

    const user = await prisma.user.findFirst({
      where: { id: sub },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    return user;
  }
}
