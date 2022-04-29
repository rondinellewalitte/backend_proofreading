import { prisma } from "../../../../database/prismaClient";

interface IRoomTest {
  school_id: string;
}

export class ListRoomTestUseCase {
  async execute({ school_id }: IRoomTest) {
    if (!school_id) {
      return [{ id: "0", room: "Sem turmas cadastradas!" }];
    }
    const schoolExists = await prisma.schools.findFirst({
      where: {
        id: school_id,
      },
    });

    if (!schoolExists) {
      return [{ id: "0", room: "Sem turmas cadastradas!" }];
    }

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
      return [{ id: "0", room: "Sem turmas cadastradas!" }];
    }
    return test;
  }
}
