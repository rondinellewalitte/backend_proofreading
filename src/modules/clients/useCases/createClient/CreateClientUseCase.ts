import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
