import type { TMessage } from "@/lib/types";
import { MessageItem } from "./MessageItem";

interface IMessageList {
    messages: TMessage[];
}

export function MessageList({ messages }: IMessageList) {
    return (
        <div className="flex-1 p-3 x-overflow-y">
            {messages.map((message) => (
                <MessageItem message={message} key={message.id} />
            ))}
        </div>
    )
}