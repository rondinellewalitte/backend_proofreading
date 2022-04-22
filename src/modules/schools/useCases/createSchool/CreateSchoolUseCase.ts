import { prisma } from "../../../../database/prismaClient";

interface ISchoolClient {
  school: string;
}

export class CreateSchoolUseCase {
  async execute({ school }: ISchoolClient) {
    const schoolExists = await prisma.schools.findFirst({
      where: {
        school,
      },
    });

    if (schoolExists) {
      throw new Error("Schools already exists");
    }

    const result = await prisma.schools.create({
      data: {
        school,
      },
    });

    return result;
  }
}
