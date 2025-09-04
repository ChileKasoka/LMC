type NotificationType = "booking" | "payment" | "maid" | "system";

type Notification = {
  id: number;
  type: NotificationType;
  message: string;
  time: string;
};

export default function Notifications() {
  // Mock notification data (replace with API later)
  const notifications: Notification[] = [
    { id: 1, type: "booking", message: "New booking from client John Mwale", time: "2 hours ago" },
    { id: 2, type: "payment", message: "Payment of K1,200 received from client Chanda Phiri", time: "4 hours ago" },
    { id: 3, type: "maid", message: "Maid Grace Banda marked as available", time: "Yesterday" },
    { id: 4, type: "system", message: "System maintenance scheduled for 10 PM", time: "2 days ago" },
  ];

  // Color tags for types
  const typeColors: Record<NotificationType, string> = {
    booking: "#1976d2",
    payment: "#2e7d32",
    maid: "#9c27b0",
    system: "#f57c00",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
      {/* Notifications list */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {notifications.map((note) => (
          <div
            key={note.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              background: "#f9f9f9",
              borderLeft: `6px solid ${typeColors[note.type]}`,
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#333" }}>{note.message}</p>
              <span style={{ fontSize: "0.8rem", color: "#777" }}>{note.time}</span>
            </div>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#999",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
