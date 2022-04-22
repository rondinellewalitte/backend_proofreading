import { Request, Response } from "express";

import { UpdateStudentTestUseCase } from "./UpdateStudentTestUseCase";

export class UpdateStudentTestController {
  async handle(request: Request, response: Response) {
    const {
      id,
      answer_01,
      answer_02,
      answer_03,
      answer_04,
      answer_05,
      answer_06,
      answer_07,
      answer_08,
      answer_09,
      answer_10,
      answer_11,
      answer_12,
      answer_13,
      answer_14,
      answer_15,
      answer_16,
      answer_17,
    } = request.body;
    const { id_client } = request;

    const updateStudentTestUseCase = new UpdateStudentTestUseCase();

    const test = await updateStudentTestUseCase.execute({
      id,
      id_client,
      answer_01,
      answer_02,
      answer_03,
      answer_04,
      answer_05,
      answer_06,
      answer_07,
      answer_08,
      answer_09,
      answer_10,
      answer_11,
      answer_12,
      answer_13,
      answer_14,
      answer_15,
      answer_16,
      answer_17,
    });
    return response.json(test);
  }
}
