import { prisma } from "../../../../database/prismaClient";

interface ICreateTest {
  id_client: string;
  student_name: string;
  id_school: string;
  id_room: string;
}

export class CreateTestUseCase {
  async execute({ id_client, student_name, id_school, id_room }: ICreateTest) {
    const test = await prisma.test.create({
      data: {
        id_client,
        student_name,
        id_school,
        id_room,
      },
    });

    return test;
  }
}
