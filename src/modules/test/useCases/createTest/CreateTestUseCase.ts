import { prisma } from "../../../../database/prismaClient";

interface ICreateTest {
  id_client: string;
  student_name: string;
  id_school: string;
  id_room: string;
  type_test: string;
}

export class CreateTestUseCase {
  async execute({
    id_client,
    student_name,
    id_school,
    id_room,
    type_test,
  }: ICreateTest) {
    const clientExists = await prisma.user.findFirst({
      where: {
        id: id_client,
      },
    });

    if (!clientExists) {
      throw new Error("User doesn't exist!");
    }

    const schoolExists = await prisma.schools.findFirst({
      where: {
        id: id_school,
      },
    });

    if (!schoolExists) {
      throw new Error("School doesn't exist!");
    }

    const roomExists = await prisma.rooms.findFirst({
      where: {
        id: id_room,
      },
    });

    if (!roomExists) {
      throw new Error("School doesn't exist!");
    }

    const studentUperCase = student_name.toUpperCase();

    const test = await prisma.test.create({
      data: {
        id_client,
        student_name: studentUperCase,
        id_school,
        id_room,
        type_test,
      },
    });

    return test;
  }
}
