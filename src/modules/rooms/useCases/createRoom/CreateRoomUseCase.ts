import { prisma } from "../../../../database/prismaClient";

interface IRoomClient {
  school_id: string;
  room: string;
}

export class CreateRoomUseCase {
  async execute({ school_id, room }: IRoomClient) {
    const schoolExists = await prisma.schools.findFirst({
      where: {
        id: school_id,
      },
    });

    if (!schoolExists) {
      throw new Error("School doesn't exist");
    }

    const result = await prisma.rooms.create({
      data: {
        room,
        school_id,
      },
    });

    return result;
  }
}
