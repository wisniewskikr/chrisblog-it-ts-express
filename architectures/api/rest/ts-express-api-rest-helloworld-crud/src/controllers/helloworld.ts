type Message = {
    id: number;
    text: string;
}
import { Request, Response } from "express";
import { readAll, readById, create, update, del } from "../services/crud";

export const handleReadAll = (req: Request, res: Response): void => {
    res.json(readAll())
};

export const handleReadById = (req: Request, res: Response): void => {
    
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.json("Specific ID Not Found").status(400);
        return;
    }

    const message: Message = readById(id);
    if (message == null) {
        res.json("Specific Message Not Found").status(400);
        return;
    }
    
    res.json(message)

};

export const handleCreate = (req: Request, res: Response): void => {
    const text = req.body.text;
    create(text);
    res.json("New Message was added");
};

export const handleUpdate = (req: Request, res: Response): void => {
    update(req.body)
    res.json("Message was updated");
};

export const handleDelete = (req: Request, res: Response): void => {
    
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.json("Specific ID Not Found").status(400);
        return;
    }

    const message: Message = readById(id);
    if (message == null) {
        res.json("Specific Message Not Found").status(400);
        return;
    }

    del(id);
    
    res.json("Message was deleted")

};