import { Request, Response } from "express";

export const getMessageIndex = (req: Request, res: Response): void => {
    res.send("Hello World Index");
};

export const getMessageHelloWorld = (req: Request, res: Response): void => {
    res.send("Hello World Message");
};