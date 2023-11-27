import { Request, Response } from "express";

export const handleInit = (req: Request, res: Response): void => {
    res.render('init');
};

export const handleHelloWorld = (req: Request, res: Response): void => {
    res.render('helloworld');
};