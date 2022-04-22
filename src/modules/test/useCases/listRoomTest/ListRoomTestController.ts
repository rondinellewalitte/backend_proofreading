import { Request, Response } from "express";

import { ListRoomTestUseCase } from "./ListRoomTestUseCase";

export class ListRoomTestController {
  async handle(request: Request, response: Response) {
    const { school_id } = request.body;

    const listRoomTestUseCase = new ListRoomTestUseCase();

    const test = await listRoomTestUseCase.execute({
      school_id,
    });
    return response.json(test);
  }
}
