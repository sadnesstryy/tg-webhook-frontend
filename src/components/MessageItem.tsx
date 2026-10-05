import type { TMessage } from "@/lib/types";

interface IMessageItem {
    message: TMessage;
}

export function MessageItem({ message }: IMessageItem) {
    return (
        <div className={`max-w-[70%] px-6 py-6 mb-2 border-xm ${message.sender === "user" ? "message-me" : "message-bot"}`}>
            {message.text}
        </div>
    );
}