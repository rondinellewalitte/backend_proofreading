import { prisma } from "../../../../database/prismaClient";

interface IFindStudentTest {
  school: string;
  room: string;
}

export class FindStudentTestUseCase {
  async execute({ school, room }: IFindStudentTest) {
    const test = await prisma.test.findMany({
      where: {
        school,
        room,
      },
      select: {
        id: true,
        student_name: true,
      },
    });

    if (test.length === 0) {
      throw new Error("No results found!");
    }
    return test;
  }
}
