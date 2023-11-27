type Message = {
    id: number;
    text: string;
}
let messages: Message[] = [];
let messageId = 1;

export const readAll = () => {
    return messages;
}

export const readById = (id: number) => {
    return messages.find((c) => c.id == id);
}

export const create = (text: string) => {
    const message = JSON.parse(`{"id": ${messageId}, "text": "${text}"}`)
    messages.push(message);
    messageId++;
}

export const update = (message: Message) => {
    messages = messages.filter((c) => c.id != message.id);
    messages.push(message);
}

export const del = (id: number) => {
    messages = messages.filter((c) => c.id != id);
}