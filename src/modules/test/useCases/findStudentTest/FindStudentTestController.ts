import { Request, Response } from "express";

import { FindStudentTestUseCase } from "./FindStudentTestUseCase";

export class FindStudentTestController {
  async handle(request: Request, response: Response) {
    const { school, room } = request.body;

    const findStudentTestUseCase = new FindStudentTestUseCase();

    const test = await findStudentTestUseCase.execute({
      school,
      room,
    });
    return response.json(test);
  }
}
