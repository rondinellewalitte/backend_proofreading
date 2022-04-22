import { Request, Response } from "express";

import { CreateRoomUseCase } from "./CreateRoomUseCase";

export class CreateRoomController {
  async handle(request: Request, response: Response) {
    const { school_id, room } = request.body;

    const createClientUseCase = new CreateRoomUseCase();

    const result = await createClientUseCase.execute({
      school_id,
      room,
    });

    return response.json(result);
  }
}
