import { prisma } from "../../../../database/prismaClient";

interface IFindStudentTest {
  school: string;
  room: string;
}

export class FindStudentTestUseCase {
async execute({ school, room }: IFindStudentTest) {


console.log(school);
console.log(room);
    const test = await prisma.test.findMany({
      where: {
        id_school: school,
        id_room: room,
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
