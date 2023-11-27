import { Request, Response } from "express";
import { readAll } from "../services/crud";

export const handleReadAll = (req: Request, res: Response): void => {
    res.json(readAll)
};