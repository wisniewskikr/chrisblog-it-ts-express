import { Request, Response } from "express";

export const getPageNotFound = (req: Request, res: Response): void => {
    res.send("Page Not Found").status(404);
};