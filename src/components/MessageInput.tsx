"use client";

import { FormEvent, useState } from "react";

interface IMessageInput {
    onSend: (text: string) => void;
}

export function MessageInput({ onSend }: IMessageInput) {
    const [text, setText] = useState("");

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const value = text.trim();

        if(!value) return;

        onSend(value);

        setText("");
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center justify-center">
            <input type="text"
                className="w-1/2 rounded-xl border-2 border-blue-300 text-center p-4"
                placeholder="Input message..."
                value={text}
                onChange={(ev) => setText(ev.target.value)}
            />

            <button className="w-[20%] rounded-xl p-2 border-2" type="submit">
                Send
            </button>
        </form>
    )
}