export type TMessage = {
    id: number;
    text: string;
    sender: "user" | "bot";
}

export type TSendMessageRequest = {
    chatId: string;
    text: string;
}