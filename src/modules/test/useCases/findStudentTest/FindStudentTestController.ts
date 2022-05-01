import { Request, Response } from "express";

import { FindStudentTestUseCase } from "./FindStudentTestUseCase";

export class FindStudentTestController {
  async handle(request: Request, response: Response) {
    const { school_id, room_id } = request.body;

    const findStudentTestUseCase = new FindStudentTestUseCase();

    const test = await findStudentTestUseCase.execute({
      school_id,
      room_id,
    });
    return response.json(test);
  }
}
