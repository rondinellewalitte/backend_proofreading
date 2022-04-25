import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  email: string;
  username: string;
  password: string;
  word_secret: string;
}

export class CreateClientUseCase {
  async execute({ email, username, password, word_secret }: ICreateClient) {
    if (word_secret !== process.env.WORD_SECRET) {
      throw new Error("Secret word is wrong");
    }

    const emailExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExists) {
      throw new Error("Email already exists");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.user.create({
      data: {
        email,
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
