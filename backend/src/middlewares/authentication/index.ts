import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req?.headers?.authorization?.replace("Bearer ", "") || "";
    const decoded: any = jwt.verify(token, JWT_SECRET);
    req.body.email = decoded?.email;
    next();
  } catch (error) {
    return res.status(403).send({ error: 403, message: "Invalid token" });
  }
};
