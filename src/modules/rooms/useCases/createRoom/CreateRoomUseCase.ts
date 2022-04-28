import { prisma } from "../../../../database/prismaClient";

interface IRoomClient {
  school_id: string;
  room: string;
}

export class CreateRoomUseCase {
  async execute({ school_id, room }: IRoomClient) {
    if (!school_id) {
      throw new Error("School doesn't exist");
    }

    const roomUperCase = room.toUpperCase();

    const schoolExists = await prisma.schools.findFirst({
      where: {
        id: school_id,
      },
    });

    const roomExists = await prisma.rooms.findFirst({
      where: {
        room: roomUperCase,
      },
    });

    if (!schoolExists) {
      throw new Error("School doesn't exist!");
    }

    if (roomExists) {
      throw new Error("Room already exists!");
    }

    await prisma.rooms.create({
      data: {
        room: roomUperCase,
        school_id,
      },
    });

    const response = { status: "success", message: "Room create Sucess!" };

    return response;
  }
}
