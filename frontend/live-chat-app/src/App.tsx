import { useState } from "react";

export default function App() {
  const [chatCode, setChatCode] = useState<string | null>(null);

  const startChat = async () => {
    try {
      const res = await fetch("/api/register", { method: "POST" });
      const data = await res.json();
      setChatCode(data.chat);
    } catch (err) {
      console.error(err);
      alert('A "fetch api/register" error occurred while generating your CHAT code.');
    }
  };

  return (
    <main className="bg-blue-100 p-6 max-w-4xl mx-auto h-screen flex items-center justify-center">
      {/* Main box */}
      <div className="m-10 p-10 rounded-xl shadow-lg text-white"
        style={{
          backgroundColor: "rgb(93,82,192)",
          backgroundImage: "url('/img/forest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="mb-4">You are not logged in.</p>

        <button
          onClick={startChat}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          💬 New Chat
        </button>
      </div>

      {/* Chat area */}
      {chatCode && (
        <div className="mt-10 p-6 bg-white rounded-xl shadow-lg text-black">
          <h2 className="text-2xl font-bold mb-4">Chat Started ✅</h2>

          <p>Your chat code: <span className="font-mono text-blue-700">{chatCode}</span></p>

          <textarea
            className="w-full mt-4 p-2 border rounded"
            rows={5}
            placeholder="Type your message..."
          ></textarea>

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
      )}
    </main>
  );
}
