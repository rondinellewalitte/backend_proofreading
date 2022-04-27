import { prisma } from "../../../../database/prismaClient";

interface ISchoolClient {
  school: string;
}

export class CreateSchoolUseCase {
  async execute({ school }: ISchoolClient) {
    const schoolUperCase = school.toUpperCase();
    const schoolExists = await prisma.schools.findFirst({
      where: {
        school: schoolUperCase,
      },
    });

    if (schoolExists) {
      throw new Error("Schools already exists");
    }

    await prisma.schools.create({
      data: {
        school: schoolUperCase,
      },
    });

    const response = { status: "success", message: "School create Sucess!" };

    return response;
  }
}
