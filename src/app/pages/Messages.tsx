import { useNavigate } from "react-router-dom";

export default function MessagesPage() {
  const navigate = useNavigate();

  const messages = [
    {
      id: 1,
      name: "Bright Maids Support",
      lastMessage: "We’ve resolved your issue regarding payment.",
      time: "2h ago",
      unread: false,
    },
    {
      id: 2,
      name: "Maid - Mary Banda",
      lastMessage: "Thank you! I’ll be there at 09:00 tomorrow.",
      time: "1d ago",
      unread: true,
    },
    {
      id: 3,
      name: "Bright Maids Support",
      lastMessage: "Your feedback has been submitted successfully.",
      time: "3d ago",
      unread: false,
    },
  ];

  return (
    <div className="messages-page">
      {/* Header */}
      <header className="messages-header">
        <h1>Messages</h1>
      </header>

      {/* Message List */}
      <div className="messages-list">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-card ${msg.unread ? "unread" : ""}`}
            onClick={() => navigate(`/messages/${msg.id}`)}
          >
            <div className="message-info">
              <h3>{msg.name}</h3>
              <p>{msg.lastMessage}</p>
            </div>
            <div className="message-time">
              <span>{msg.time}</span>
              {msg.unread && <div className="unread-dot"></div>}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .messages-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: #f4f6f8;
          font-family: Arial, sans-serif;
        }

        .messages-header {
          background: #0b1a28;
          color: #fff;
          padding: 1rem 1.5rem;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }

        .messages-header h1 {
          font-size: 1.4rem;
          margin: 0;
          font-weight: 600;
        }

        .messages-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1rem;
        }

        .message-card {
          background: #fff;
          border-radius: 10px;
          padding: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .message-card:hover {
          background: #f1f5f9;
        }

        .message-card.unread {
          border-left: 4px solid #0b1a28;
        }

        .message-info h3 {
          font-size: 1rem;
          margin: 0 0 0.25rem 0;
          color: #0b1a28;
        }

        .message-info p {
          font-size: 0.9rem;
          color: #555;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 230px;
        }

        .message-time {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .message-time span {
          font-size: 0.8rem;
          color: #777;
        }

        .unread-dot {
          width: 10px;
          height: 10px;
          background: #6d0700;
          border-radius: 50%;
        }

        /* Responsive design */
        @media (min-width: 768px) {
          .messages-list {
            max-width: 600px;
            margin: 1rem auto;
          }

          .message-info p {
            max-width: 350px;
          }
        }
      `}</style>
    </div>
  );
}
