import { Request, Response } from "express";

export const getResourceNotFound = (req: Request, res: Response): void => {
    res.send("Resource Not Found").status(404);
};