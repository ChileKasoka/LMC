import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Send } from "lucide-react";

interface Message {
  id: number;
  sender: "client" | "company";
  text: string;
  time: string;
}

export default function MessageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    // Fetch thread by id (mock here)
    const initial: Message[] = [
      { id: 1, sender: "company", text: "Hello! How can we assist you?", time: "10:00 AM" },
      { id: 2, sender: "client", text: "I have an issue with last service.", time: "10:02 AM" },
    ];
    setMessages(initial);
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      sender: "client",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInput("");
    // Optionally send to backend here
  };

  return (
    <div className="chat-detail-page">
      <style>{`
        .chat-detail-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: #f4f6f8;
          font-family: Arial, sans-serif;
          color: #1e293b;
        }
        .chat-header {
          background: #0b1a28;
          color: white;
          text-align: center;
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: bold;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }
        .chat-thread {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .message {
          display: flex;
          width: 100%;
        }
        .message.company {
          justify-content: flex-start;
        }
        .message.client {
          justify-content: flex-end;
        }
        .bubble {
          max-width: 70%;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          line-height: 1.4;
          font-size: 0.95rem;
        }
        .message.company .bubble {
          background: #e0e7ef;
          color: #000;
          border-top-left-radius: 0;
        }
        .message.client .bubble {
          background: #0b1a28;
          color: #fff;
          border-top-right-radius: 0;
        }
        .bubble-time {
          font-size: 0.8rem;
          color: #555;
          margin-top: 0.3rem;
          text-align: right;
        }
        .chat-input {
          border-top: 1px solid #ccc;
          padding: 0.75rem;
          background: #fff;
          display: flex;
          gap: 0.5rem;
        }
        .chat-input textarea {
          flex: 1;
          resize: none;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.6rem;
          font-size: 0.95rem;
        }
        .chat-input button {
          background: #0b1a28;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .chat-detail-page .chat-thread {
            max-width: 600px;
            margin: 0 auto;
          }
          .chat-input {
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>

      <header className="chat-header">
        Conversation #{id}
      </header>

      <div className="chat-thread">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="bubble">
              {msg.text}
              <div className="bubble-time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Type your message..."
          rows={1}
        />
        <button type="submit">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
