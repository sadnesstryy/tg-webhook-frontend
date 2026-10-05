import type { TSendMessageRequest } from "./types";

const API_URL = "http://localhost:8888";

export class Api {
    async sendMessage(data: TSendMessageRequest) {
        const resp = await fetch(`${API_URL}/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await resp.json();

        if(!resp.ok) {
            throw new Error(result.message || "Failed to send message");
        }

        return result;
    }
}