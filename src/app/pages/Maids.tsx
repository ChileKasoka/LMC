import { useNavigate } from "react-router-dom";

export default function Maids() {
  const navigate = useNavigate();

  // Mock data (replace later with API call)
  const maids = [
    {
      id: 1,
      name: "Mary Banda",
      photo: "/maid1.jpg", // 👈 place images in public/
      skills: ["Cleaning", "Laundry"],
      phone: "+260 971 123 456",
      status: "Available",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Grace Phiri",
      photo: "/maid2.jpg",
      skills: ["Cooking", "Child Care"],
      phone: "+260 972 222 333",
      status: "Busy",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Lydia Mwale",
      photo: "/maid3.jpg",
      skills: ["Elderly Care", "Cleaning"],
      phone: "+260 973 555 777",
      status: "Available",
      rating: 5.0,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  }}
>
  {/* Left side: search + filter */}
  <div style={{ display: "flex", gap: "0.5rem" }}>
    <input
      type="text"
      placeholder="Search helpers..."
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
    <select
      style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        outline: "none",
        background: "#ffffffff",
        color: "#000000ff",
      }}
    >
      <option value="">All</option>
      <option value="available">Available</option>
      <option value="busy">Busy</option>
    </select>
  </div>

  {/* Right side: button */}
  <button
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
    New Helper
  </button>
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {maids.map((maid) => (
          <div
            key={maid.id}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={maid.photo}
              alt={maid.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#444" }}>{maid.name}</h3>
            <p style={{ margin: "0.25rem 0", color: "#666" }}>{maid.phone}</p>
            <p style={{ margin: "0.25rem 0", color: "#555", fontSize: "0.9rem" }}>
              Skills: {maid.skills.join(", ")}
            </p>
            <p
              style={{
                margin: "0.25rem 0",
                color: maid.status === "Available" ? "#4CAF50" : "#FF9800",
                fontWeight: "500",
              }}
            >
              {maid.status}
            </p>
            <p style={{ margin: "0.25rem 0", color: "#888" }}>⭐ {maid.rating}</p>

            <button
              onClick={() => navigate(`/maids/${maid.id}`)}
              style={{
                marginTop: "1rem",
                background: "#1976d2",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
