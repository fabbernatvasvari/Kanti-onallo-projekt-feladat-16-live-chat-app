import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connectSocket, getSocket } from "../websocket/socket";

export default function ChatPage() {
  const { userId } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    connectSocket(localStorage.getItem("token")!);

    fetch(`/api/messages/conversation/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((r) => r.json())
      .then(setMessages);
  }, []);

  function sendMessage() {
    fetch("/api/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient_id: userId,
        content: input,
      }),
    });

    setInput("");
  }

  const socket = getSocket();
  if (socket) {
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages((m) => [...m, msg]);
    };
  }

  return (
    <div className="p-5">
      <h1 className="text-xl mb-4">Chat</h1>

      <div className="border p-3 h-96 overflow-y-scroll">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <strong>{m.senderName}: </strong> {m.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-3">
        <input
          className="border p-2 flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={sendMessage}>
          Küldés
        </button>
      </div>
    </div>
  );
}
