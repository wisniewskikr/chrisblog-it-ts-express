import { Request, Response } from "express";

export const handleIndex = (req: Request, res: Response): void => {
    res.send("Please use following URL structure: http://localhost:3000/name/{name} or http://localhost:3000/name/{name}?contentType=json");
};

export const handleName = (req: Request, res: Response): void => {
    res.send("Hello World Message");
};