import { prisma } from "../../../../database/prismaClient";

interface IListClient {
  page: string;
}

export class ListClientUseCase {
  async execute({ page }: IListClient) {
    const per_page = 10;

    const total = await prisma.user.count({});

    const pageStart = (Number(page) - 1) * per_page;
    const pageEnd = pageStart + per_page;

    const userList = await prisma.user.findMany({
      skip: pageStart,
      take: pageEnd,
      select: {
        id: true,
        username: true,
        email: true,
        created_at: true,
      },
    });

    if (userList.length === 0) {
      throw new Error("No results found!");
    }

    return { userList, total };
  }
}
