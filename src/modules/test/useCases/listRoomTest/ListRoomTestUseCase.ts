import { prisma } from "../../../../database/prismaClient";

interface IRoomTest {
  school_id: string;
}

export class ListRoomTestUseCase {
  async execute({ school_id }: IRoomTest) {
    const test = await prisma.rooms.findMany({
      where: {
        school_id,
      },
      select: {
        id: true,
        room: true,
      },
    });

    if (test.length === 0) {
      throw new Error("No results found!");
    }
    return test;
  }
}
