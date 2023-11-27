import { Request, Response } from "express";

export const handleNotFound = (req: Request, res: Response): void => {
    res.render('404');
};