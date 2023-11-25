import { Request, Response } from "express";

export const getMessageIndex = (req: Request, res: Response): void => {
    res.status(200).json("Hello World Index");
};

export const getMessageHelloWorld = (req: Request, res: Response): void => {
    res.status(200).json("Hello World Message");
};