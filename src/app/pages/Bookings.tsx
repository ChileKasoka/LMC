import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Bookings() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mock data
  const bookings = [
    {
      id: 101,
      client: "Jane Doe",
      maid: "Mary Banda",
      service: "House Cleaning",
      date: "2025-09-05",
      time: "09:00 AM",
      address: "Plot 12, Kabulonga, Lusaka",
      paymentMethod: "Cash",
      amount: "K250",
      createdAt: "2025-08-30",
      status: "Confirmed",
    },
    {
      id: 102,
      client: "John Phiri",
      maid: "Grace Phiri",
      service: "Laundry",
      date: "2025-09-06",
      time: "02:00 PM",
      address: "Flat 4, Longacres, Lusaka",
      paymentMethod: "Mobile Money",
      amount: "K180",
      createdAt: "2025-08-29",
      status: "Pending",
    },
    {
      id: 103,
      client: "Chipo Mwansa",
      maid: "Lydia Mwale",
      service: "Cooking",
      date: "2025-09-07",
      time: "11:00 AM",
      address: "Chilanga Estates, Lusaka",
      paymentMethod: "Card",
      amount: "K300",
      createdAt: "2025-08-28",
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "#4CAF50";
      case "Pending":
        return "#FF9800";
      case "Cancelled":
        return "#F44336";
      default:
        return "#999";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        background: "#f0f2f5",
        padding: "1rem",
        minHeight: "100vh",
      }}
    >
      {/* Header & Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Search bookings..."
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            outline: "none",
            background: "#fff",
            color: "#000",
          }}
        />
        <button
          onClick={() => navigate("/bookings/create")}
          style={{
            background: "#0b1a28ff",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          + New Booking
        </button>
      </div>

      {/* Desktop Table */}
      {!isMobile && (
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                  color: "#555",
                }}
              >
                <th style={{ padding: "0.75rem" }}>Client</th>
                <th style={{ padding: "0.75rem" }}>Maid</th>
                <th style={{ padding: "0.75rem" }}>Service</th>
                <th style={{ padding: "0.75rem" }}>Date</th>
                <th style={{ padding: "0.75rem" }}>Time</th>
                <th style={{ padding: "0.75rem" }}>Address</th>
                <th style={{ padding: "0.75rem" }}>Amount</th>
                <th style={{ padding: "0.75rem" }}>Payment</th>
                <th style={{ padding: "0.75rem" }}>Status</th>
                <th style={{ padding: "0.75rem" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  style={{
                    borderBottom: "1px solid #eee",
                    color: "#000",
                  }}
                >
                  <td style={{ padding: "0.75rem" }}>{b.client}</td>
                  <td style={{ padding: "0.75rem" }}>{b.maid}</td>
                  <td style={{ padding: "0.75rem" }}>{b.service}</td>
                  <td style={{ padding: "0.75rem" }}>{b.date}</td>
                  <td style={{ padding: "0.75rem" }}>{b.time}</td>
                  <td style={{ padding: "0.75rem" }}>{b.address}</td>
                  <td style={{ padding: "0.75rem" }}>{b.amount}</td>
                  <td style={{ padding: "0.75rem" }}>{b.paymentMethod}</td>
                  <td
                    style={{
                      padding: "0.75rem",
                      fontWeight: 500,
                      color: getStatusColor(b.status),
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
      )}

      {/* Mobile Cards */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {bookings.map((b) => (
            <div
              key={b.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                color: "#0b1a28ff",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  color: "#0b1a28ff",
                }}
              >
                {b.service}
              </h3>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Client:</strong> {b.client}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Maid:</strong> {b.maid}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Date:</strong> {b.date} at {b.time}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Address:</strong> {b.address}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Amount:</strong> {b.amount} ({b.paymentMethod})
              </p>
              <p
                style={{
                  margin: "0.25rem 0",
                  fontSize: "0.9rem",
                  color: getStatusColor(b.status),
                  fontWeight: 600,
                }}
              >
                <strong>Status:</strong> {b.status}
              </p>

              <div
                style={{
                  marginTop: "0.75rem",
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <button
                  style={{
                    flex: 1,
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    flex: 1,
                    background: "#F44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
