import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send } from "lucide-react";

export default function ComplaintsChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "company", text: "Hello! How can we assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const clientMsg = { id: Date.now(), sender: "client", text: newMessage };
    setMessages((prev) => [...prev, clientMsg]);
    setNewMessage("");

    // Simulate a reply from company after 2s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "company", text: "Thank you for your feedback! We’ll get back shortly." },
      ]);
    }, 2000);
  };

  return (
    <div className="chat-page">
      <header className="chat-header">Support & Complaints</header>

      <div className="chat-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.sender === "client" ? "client" : "company"}`}
          >
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.target.value)}
        />
        <button type="submit">
          <Send size={18} />
        </button>
      </form>

      <style>{`
        .chat-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: #f5f6f8;
          font-family: Arial, sans-serif;
        }

        .chat-header {
          background: #0b1a28;
          color: white;
          text-align: center;
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: bold;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .chat-container {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .chat-message {
          display: flex;
          width: 100%;
        }

        .chat-message.company {
          justify-content: flex-start;
        }

        .chat-message.client {
          justify-content: flex-end;
        }

        .message-bubble {
          padding: 0.75rem 1rem;
          border-radius: 12px;
          max-width: 70%;
          line-height: 1.4;
          font-size: 0.95rem;
        }

        .chat-message.company .message-bubble {
          background: #e0e7ef;
          color: #000;
          border-top-left-radius: 0;
        }

        .chat-message.client .message-bubble {
          background: #0b1a28;
          color: #fff;
          border-top-right-radius: 0;
        }

        .chat-input {
          display: flex;
          border-top: 1px solid #ccc;
          padding: 0.75rem;
          background: #fff;
        }

        .chat-input textarea {
          flex: 1;
          resize: none;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.6rem;
          font-size: 0.95rem;
          outline: none;
          min-height: 45px;
        }

        .chat-input button {
          background: #0b1a28;
          color: #fff;
          border: none;
          border-radius: 8px;
          margin-left: 0.5rem;
          padding: 0 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .chat-container {
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
    </div>
  );
}
