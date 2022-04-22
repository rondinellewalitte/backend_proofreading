import { Request, Response } from "express";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

export class CreateSchoolController {
  async handle(request: Request, response: Response) {
    const { school } = request.body;

    const createClientUseCase = new CreateSchoolUseCase();

    const result = await createClientUseCase.execute({
      school,
    });

    return response.json(result);
  }
}
