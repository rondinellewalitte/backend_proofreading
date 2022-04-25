import { Request, Response } from "express";

import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { email, username, password, word_secret } = request.body;
    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
      email,
      username,
      password,
      word_secret,
    });

    return response.json(result);
  }
}
