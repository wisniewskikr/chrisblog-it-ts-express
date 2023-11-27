type Message = {
    id: number;
    text: string;
}
let messages: Message[] = [];
let messageId = 1;

export const readAll = () => {
    return messages;
}

// module.exports = {
//     getAll: function () {
//       return messages;
//     },
//     getById: function (id: number) {
//         return messages.find((c) => c.id == id);
//     }, 
//     create: function (text: string) {
//       const message = JSON.parse(`{"id": ${messageId}, "text": "${text}"}`)
//       messages.push(message);
//       messageId++;
//     },
//     update: function (message: Message) {
//       messages = messages.filter((c) => c.id != message.id);
//       messages.push(message);
//     },
//     delete: function (id: number) {
//       messages = messages.filter((c) => c.id != id);
//     }
// };