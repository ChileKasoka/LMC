import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Services() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mock data (replace later with API)
  const services = [
    {
      id: 1,
      name: "House Cleaning",
      price: "K200",
      duration: "2 hrs",
      description:
        "Comprehensive cleaning for all rooms, surfaces, and floors. Includes vacuuming, dusting, and mopping.",
      materials: "Mop, detergent, vacuum cleaner",
    },
    {
      id: 2,
      name: "Laundry",
      price: "K150",
      duration: "1.5 hrs",
      description:
        "Washing, drying, and folding of clothes with client-provided detergent or company supplies.",
      materials: "Iron, washing powder, dryer (optional)",
    },
    {
      id: 3,
      name: "Cooking",
      price: "K180",
      duration: "2 hrs",
      description:
        "Preparation of full meals as per client’s preference and dietary needs. Ingredients provided by client.",
      materials: "Cooking utensils, client ingredients",
    },
    {
      id: 4,
      name: "Child Care",
      price: "K250",
      duration: "Half Day",
      description:
        "Care for children including feeding, playtime, and supervision. Optional homework help available.",
      materials: "Toys, educational materials (if available)",
    },
  ];

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
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#0b1a28ff", fontWeight: "600" }}>Available Services</h2>
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
          + Add Service
        </button>
      </div>

      {/* Desktop Table */}
      {!isMobile && (
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
              <tr
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                  color: "#555",
                }}
              >
                <th style={{ padding: "0.75rem" }}>Service</th>
                <th style={{ padding: "0.75rem" }}>Price</th>
                <th style={{ padding: "0.75rem" }}>Duration</th>
                <th style={{ padding: "0.75rem" }}>Description</th>
                <th style={{ padding: "0.75rem" }}>Materials</th>
                <th style={{ padding: "0.75rem" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} style={{ borderBottom: "1px solid #e2e2e2" }}>
                  <td style={{ padding: "0.75rem", fontWeight: "500" }}>{service.name}</td>
                  <td style={{ padding: "0.75rem" }}>{service.price}</td>
                  <td style={{ padding: "0.75rem" }}>{service.duration}</td>
                  <td style={{ padding: "0.75rem", maxWidth: "250px" }}>
                    {service.description}
                  </td>
                  <td style={{ padding: "0.75rem" }}>{service.materials}</td>
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
      )}

      {/* Mobile Cards */}
      {isMobile && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                color: "#0b1a28ff",
              }}
            >
              <h3 style={{ color: "#0b1a28ff", marginBottom: "0.5rem" }}>
                {service.name}
              </h3>
              <p style={{ margin: "0.3rem 0" }}>
                <strong>Price:</strong> {service.price}
              </p>
              <p style={{ margin: "0.3rem 0" }}>
                <strong>Duration:</strong> {service.duration}
              </p>
              <p style={{ margin: "0.3rem 0" }}>
                <strong>Description:</strong> {service.description}
              </p>
              <p style={{ margin: "0.3rem 0" }}>
                <strong>Materials:</strong> {service.materials}
              </p>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <button
                  style={{
                    flex: 1,
                    background: "#0b1a28ff",
                    color: "#fff",
                    border: "none",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    flex: 1,
                    background: "#6d0700ff",
                    color: "#fff",
                    border: "none",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
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
