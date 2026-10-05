interface IChatIdInput {
    value: string;
    onChange: (value: string) => void;
}

export function ChatIdInput({ value, onChange }: IChatIdInput) {
    return (
        <div className="flex items-center justify-center">
            <input type="text" placeholder="Telegram chat id"
                className="w-1/2 rounded-xl border-2 border-blue-300 text-center p-4"
                value={value} 
                onChange={(ev) => onChange(ev.target.value)} />
        </div>
    );
}