type Message = {
    id: number;
    text: string;
}
import { Request, Response } from "express";
import { readAll, readById, create, update, del } from "../services/crud";

export const handleList = (req: Request, res: Response): void => {
    res.locals.messages = readAll();
    res.render('list');
};

export const handleView = (req: Request, res: Response): void => {
    
    const messageId = Number(req.query.id);
    if (isNaN(messageId)) {
        res.render('404');
        return;
    }

    const message = readById(messageId);
    if (message == null) {
        res.render('404');
        return;
    }

    res.locals.message = message;
    res.render('view');

};