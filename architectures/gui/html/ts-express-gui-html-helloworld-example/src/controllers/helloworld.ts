import { Request, Response } from "express";

export const handleDisplay = (req: Request, res: Response): void => {
    res.render('helloworld');
};