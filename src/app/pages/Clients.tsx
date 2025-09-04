export default function Clients() {
  const clients = [
    { name: "Jane Doe", email: "jane@example.com", phone: "+260 971 111 222", status: "Active" },
    { name: "John Smith", email: "john@example.com", phone: "+260 972 333 444", status: "Inactive" },
    { name: "Emily Rose", email: "emily@example.com", phone: "+260 973 555 666", status: "Active" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      </div>

      {/* Search & Filters */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#fff",
          padding: "0.75rem",
          borderRadius: "8px",
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
            background: "#fff",      // white background
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
          }}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button
          style={{
            background: "#0b1a28ff",
            color: "#ffff",
            padding: "0.5rem 1rem",
            border: "solid 1px #000000ff",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          New Client
        </button>
      </div>

      {/* Clients Table */}
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
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd", color: "#555" }}>
              <th style={{ padding: "0.75rem" }}>Name</th>
              <th style={{ padding: "0.75rem" }}>Email</th>
              <th style={{ padding: "0.75rem" }}>Phone</th>
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
    </div>
  );
}
