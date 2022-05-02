import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import { routes } from "./routes";

const app = express();

const options: cors.CorsOptions = {
  exposedHeaders: "x-total-count",
  origin: "*",
};

app.use(cors(options));

app.use(express.json());

app.use("/tatauigo",routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(9999, () => console.log("Server is running"));
