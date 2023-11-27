import { Request, Response } from "express";

export const handleDisplay = (req: Request, res: Response): void => {
    res.locals.name = null;
    res.render('helloworld');
};

export const handleSubmit = (req: Request, res: Response): void => {
    res.locals.name = req.body.name;
    res.render('helloworld');
};