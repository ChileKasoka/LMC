import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();
  // Mock data (replace later with API)
  const services = [
    { id: 1, name: "House Cleaning", price: "K200", duration: "2 hrs" },
    { id: 2, name: "Laundry", price: "K150", duration: "1.5 hrs" },
    { id: 3, name: "Cooking", price: "K180", duration: "2 hrs" },
    { id: 4, name: "Child Care", price: "K250", duration: "Half Day" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
        onClick={() => navigate("/services/create")}
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
          Add Service
        </button>
      </div>

      {/* Services Table */}
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
              <th style={{ padding: "0.75rem" }}>Service</th>
              <th style={{ padding: "0.75rem" }}>Price</th>
              <th style={{ padding: "0.75rem" }}>Duration</th>
              <th style={{ padding: "0.75rem" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} style={{ borderBottom: "1px solid #e2e2e2ff" }}>
                <td style={{ padding: "0.75rem" }}>{service.name}</td>
                <td style={{ padding: "0.75rem" }}>{service.price}</td>
                <td style={{ padding: "0.75rem" }}>{service.duration}</td>
                <td style={{ padding: "0.75rem" }}>
                  <button
                    style={{
                      background: "#0b1a28ff",
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
                      background: "#6d0700ff",
                      color: "#fff",
                      border: "none",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
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
