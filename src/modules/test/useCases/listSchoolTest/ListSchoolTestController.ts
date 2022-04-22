import { Request, Response } from "express";

import { ListSchoolTestUseCase } from "./ListSchoolTestUseCase";

export class ListSchoolTestController {
  async handle(request: Request, response: Response) {
    const findStudentTestUseCase = new ListSchoolTestUseCase();
    const test = await findStudentTestUseCase.execute();
    return response.json(test);
  }
}
