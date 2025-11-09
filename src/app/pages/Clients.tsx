import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Clients() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const clients = [
    {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+260 971 111 222",
      address: "Plot 12 Kabulonga Rd, Lusaka",
      joined: "2024-06-15",
      status: "Active",
    },
    {
      name: "John Smith",
      email: "john@example.com",
      phone: "+260 972 333 444",
      address: "Flat 7 Longacres, Lusaka",
      joined: "2023-09-10",
      status: "Inactive",
    },
    {
      name: "Emily Rose",
      email: "emily@example.com",
      phone: "+260 973 555 666",
      address: "Chilanga Estates, Lusaka",
      joined: "2024-02-01",
      status: "Active",
    },
  ];

  // handle resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* Search & Filters */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#fff",
          padding: "0.75rem",
          borderRadius: "8px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search clients..."
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            background: "#fff",
            color: "#0b1a28ff",
          }}
        />
        <select
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            background: "#0b1a28ff",
            color: "#fff",
          }}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button
          onClick={() => navigate("/clients/create")}
          style={{
            background: "#0b1a28ff",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "solid 1px #000",
            cursor: "pointer",
            fontWeight: "500",
            borderRadius: "6px",
          }}
        >
          New Client
        </button>
      </div>

      {/* Desktop Table View */}
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
                <th style={{ padding: "0.75rem" }}>Name</th>
                <th style={{ padding: "0.75rem" }}>Email</th>
                <th style={{ padding: "0.75rem" }}>Phone</th>
                <th style={{ padding: "0.75rem" }}>Address</th>
                <th style={{ padding: "0.75rem" }}>Joined</th>
                <th style={{ padding: "0.75rem" }}>Status</th>
                <th style={{ padding: "0.75rem" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid #eee",
                    color: "#000000ff",
                  }}
                >
                  <td style={{ padding: "0.75rem" }}>{client.name}</td>
                  <td style={{ padding: "0.75rem" }}>{client.email}</td>
                  <td style={{ padding: "0.75rem" }}>{client.phone}</td>
                  <td style={{ padding: "0.75rem" }}>{client.address}</td>
                  <td style={{ padding: "0.75rem" }}>{client.joined}</td>
                  <td
                    style={{
                      padding: "0.75rem",
                      color: client.status === "Active" ? "#4CAF50" : "#F44336",
                      fontWeight: "500",
                    }}
                  >
                    {client.status}
                  </td>
                  <td style={{ padding: "0.75rem" }}>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#1976d2",
                        cursor: "pointer",
                        marginRight: "0.5rem",
                      }}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#F44336",
                        cursor: "pointer",
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Card View */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                color: "#0b1a28ff",
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem 0", color: "#0b1a28ff" }}>
                {client.name}
              </h3>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Email:</strong> {client.email}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Phone:</strong> {client.phone}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Address:</strong> {client.address}
              </p>
              <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
                <strong>Joined:</strong> {client.joined}
              </p>
              <p
                style={{
                  margin: "0.25rem 0",
                  fontSize: "0.9rem",
                  color: client.status === "Active" ? "#4CAF50" : "#F44336",
                  fontWeight: "500",
                }}
              >
                <strong>Status:</strong> {client.status}
              </p>

              <div
                style={{
                  marginTop: "0.5rem",
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
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
