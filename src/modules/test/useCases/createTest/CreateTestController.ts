import { Request, Response } from "express";

import { CreateTestUseCase } from "./CreateTestUseCase";

export class CreateTestController {
  async handle(request: Request, response: Response) {
    const { student_name, id_school, id_room } = request.body;
    const { id_client } = request;

    const createTestUseCase = new CreateTestUseCase();

    const test = await createTestUseCase.execute({
      id_client,
      student_name,
      id_school,
      id_room,
    });
    return response.json(test);
  }
}
