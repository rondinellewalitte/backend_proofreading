import { prisma } from "../../../../database/prismaClient";

export class ListSchoolTestUseCase {
  async execute() {
    const test = await prisma.schools.findMany({
      distinct: ["school"],
      select: {
        school: true,
        id: true,
      },
    });

    if (test.length === 0) {
      throw new Error("No results found!");
    }
    return test;
  }
}
