import { Request, Response } from "express";

import { MeUseCase } from "./MeUseCase";

export class MeController {
  async handle(request: Request, response: Response) {
    const authHeader = request.headers.authorization;
    const meUseCase = new MeUseCase();
    const [, token] = authHeader.split(" ");

    const result = await meUseCase.execute({
      token,
    });

    return response.json(result);
  }
}
