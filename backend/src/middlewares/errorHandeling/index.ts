import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.message) {
    case "INVALID-BODY":
      return res.status(400).json({ error: "Invalid request body received" });
    default:
      return res.status(500).json({ error: err.message });
  }
};
