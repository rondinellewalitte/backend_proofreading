import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Token missing" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "319089c7e1d38f8836c17a4e27658ae6"
    ) as IPayload;

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid token!" });
  }
}
