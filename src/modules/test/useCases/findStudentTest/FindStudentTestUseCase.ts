import { prisma } from "../../../../database/prismaClient";

interface IFindStudentTest {
  school_id: string;
  room_id: string;
}

export class FindStudentTestUseCase {
  async execute({ school_id, room_id }: IFindStudentTest) {
    const test = await prisma.test.findMany({
      where: {
        id_school: school_id,
        id_room: room_id,
      },
      select: {
        id: true,
        student_name: true,
        type_test: true,
      },
    });

    if (test.length === 0) {
      return [{ id: "0", room: "Sem Alunos cadastradas!" }];
    }
    return test;
  }
}
