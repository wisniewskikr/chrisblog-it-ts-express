type Message = {
    id: number;
    text: string;
}
import { Request, Response } from "express";
import { readAll, readById, create, update, del } from "../services/crud";

export const handleReadAll = (req: Request, res: Response): void => {
    res.json(readAll)
};

export const handleReadById = (req: Request, res: Response): void => {
    
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.json("Specific ID Not Found");
        return;
    }

    const message: Message = readById(id);
    if (message == null) {
        res.json("Specific Message Not Found");
        return;
    }
    
    res.json(message)

};