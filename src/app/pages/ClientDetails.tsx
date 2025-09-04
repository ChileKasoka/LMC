import { useParams, useNavigate } from "react-router-dom";

export default function ClientDetails() {
  useParams(); // 👈 gets client ID from URL
  const navigate = useNavigate();

  // Mock data (replace with API call later)
  const client = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+260 971 111 222",
    status: "Active",
    joined: "Jan 15, 2024",
    bookings: [
      { id: 101, date: "2024-08-01", service: "House Cleaning", status: "Completed" },
      { id: 102, date: "2024-08-10", service: "Laundry", status: "Pending" },
      { id: 103, date: "2024-08-20", service: "Cooking", status: "Cancelled" },
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0, color: "#333" }}>Client Details</h2>
        <button
          onClick={() => navigate(-1)} // 👈 go back
          style={{
            background: "#1976d2",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          ← Back
        </button>
      </div>

      {/* Client Info Card */}
      <div
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ margin: "0 0 1rem 0", color: "#444" }}>{client.name}</h3>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
        <p><strong>Status:</strong> 
          <span
            style={{
              color: client.status === "Active" ? "#4CAF50" : "#F44336",
              fontWeight: "500",
              marginLeft: "0.5rem",
            }}
          >
            {client.status}
          </span>
        </p>
        <p><strong>Joined:</strong> {client.joined}</p>
      </div>

      {/* Booking History */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "#444" }}>Booking History</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd", color: "#555" }}>
              <th style={{ padding: "0.75rem" }}>Date</th>
              <th style={{ padding: "0.75rem" }}>Service</th>
              <th style={{ padding: "0.75rem" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {client.bookings.map((b) => (
              <tr key={b.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "0.75rem" }}>{b.date}</td>
                <td style={{ padding: "0.75rem" }}>{b.service}</td>
                <td
                  style={{
                    padding: "0.75rem",
                    color:
                      b.status === "Completed"
                        ? "#4CAF50"
                        : b.status === "Pending"
                        ? "#FF9800"
                        : "#F44336",
                    fontWeight: "500",
                  }}
                >
                  {b.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
