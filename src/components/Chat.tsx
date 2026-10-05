"use client";

import { useEffect, useState } from "react";

import { Api } from "@/lib/api";
import { TMessage } from "@/lib/types";

import { ChatIdInput } from "./ChatIdInput";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

const api = new Api();

export function Chat() {
    const [chatId, setChatId] = useState("");
    const [messages, setMessages] = useState<TMessage[]>([]);

    useEffect(() => {
        const events = new EventSource(
            "http://localhost:8888/events"
        );

        events.onopen = () => {
            console.log("SSE connected");
        };

        events.onmessage = (event) => {
            console.log("RAW SSE:", event.data);

            const data = JSON.parse(event.data);

            console.log("SSE data:", data);

            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: Date.now(),
                    text: data.text,
                    sender: data.sender,
                },
            ]);
        };

        events.onerror = (error) => {
            console.error("SSE error:", error);
        };

        return () => {
            events.close();
        };
    }, []);

    const onSendMessage = async (text: string) => {
        if (!chatId) return;

        try {
            await api.sendMessage({
                chatId,
                text,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col">
            <ChatIdInput
                value={chatId}
                onChange={setChatId}
            />
            <MessageList messages={messages} />
            <MessageInput onSend={onSendMessage} />
        </div>
    );
}