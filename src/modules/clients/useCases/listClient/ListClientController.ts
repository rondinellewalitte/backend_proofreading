import { Request, Response } from "express";

import { ListClientUseCase } from "./ListClientUseCase";

export class ListClientController {
  async handle(request: Request, response: Response) {
    const { page } = request.query;

    if (!page) {
      throw new Error("Pagination is missing!");
    }

    const listClientUseCase = new ListClientUseCase();

    const result = await listClientUseCase.execute({
      page,
    });

    const { total, userList } = result;

    response.setHeader("x-total-count", total);

    return response.json(userList);
  }
}
