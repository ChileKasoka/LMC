import { useNavigate } from "react-router-dom";

export default function Bookings() {
    const navigate = useNavigate();
  // Mock data (replace with API later)
  const bookings = [
    {
      id: 101,
      client: "Jane Doe",
      maid: "Mary Banda",
      service: "House Cleaning",
      date: "2025-09-05",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 102,
      client: "John Phiri",
      maid: "Grace Phiri",
      service: "Laundry",
      date: "2025-09-06",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 103,
      client: "Chipo Mwansa",
      maid: "Lydia Mwale",
      service: "Cooking",
      date: "2025-09-07",
      time: "11:00 AM",
      status: "Cancelled",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
    <input
      type="text"
      placeholder="Search Bookings..."
      style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        outline: "none",
        minWidth: "200px",
        background: "#ffffffff",
        color: "#000000ff",
      }}
    />
  </div>
        <button
        onClick={() => navigate("/bookings/create")}
          style={{
            background: "#0b1a28ff",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          New Booking
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          color: "#000000ff",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd", color: "#555" }}>
              <th style={{ padding: "0.75rem" }}>Client</th>
              <th style={{ padding: "0.75rem" }}>Maid</th>
              <th style={{ padding: "0.75rem" }}>Service</th>
              <th style={{ padding: "0.75rem" }}>Date</th>
              <th style={{ padding: "0.75rem" }}>Time</th>
              <th style={{ padding: "0.75rem" }}>Status</th>
              <th style={{ padding: "0.75rem" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "0.75rem" }}>{b.client}</td>
                <td style={{ padding: "0.75rem" }}>{b.maid}</td>
                <td style={{ padding: "0.75rem" }}>{b.service}</td>
                <td style={{ padding: "0.75rem" }}>{b.date}</td>
                <td style={{ padding: "0.75rem" }}>{b.time}</td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "500",
                    color:
                      b.status === "Confirmed"
                        ? "#4CAF50"
                        : b.status === "Pending"
                        ? "#FF9800"
                        : "#F44336",
                  }}
                >
                  {b.status}
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <button
                    style={{
                      background: "#1976d2",
                      color: "#fff",
                      border: "none",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "0.5rem",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      background: "#F44336",
                      color: "#fff",
                      border: "none",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
