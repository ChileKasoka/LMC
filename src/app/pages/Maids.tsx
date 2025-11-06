import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Maid {
  id: number;
  name: string;
  photo: string;
  skills: string[];
  phone: string;
  status: "Available" | "Busy";
  rating: number;
}

export default function Maids() {
  const navigate = useNavigate();

  // Mock data (replace with API later)
  const allMaids: Maid[] = Array.from({ length: 45 }).map((_, i) => ({
    id: i + 1,
    name: `Maid ${i + 1}`,
    photo: "/maid1.jpg",
    skills: ["Cleaning", "Laundry"],
    phone: `+260 97${i.toString().padStart(3, "0")} 123 456`,
    status: i % 3 === 0 ? "Busy" : "Available",
    rating: Math.round(Math.random() * 5 * 10) / 10,
  }));

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = Math.ceil(allMaids.length / pageSize);
  const paginatedMaids = allMaids.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div style={{ minHeight: "100vh", padding: "2rem", background: "#f8f9fa", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Search helpers..."
            style={{
              padding: "0.5rem 0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              minWidth: "200px",
              background: "#ffffff",
              color: "#1f2937",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          />
          <select
            style={{
              padding: "0.5rem 0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              background: "#ffffff",
              color: "#1f2937",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <option value="">All Status</option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
          </select>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{
              padding: "0.5rem 0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              background: "#ffffff",
              color: "#1f2937",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </select>
        </div>

        <button
          onClick={() => navigate("/maids/create")}
          style={{
            background: "linear-gradient(90deg, #0f172a, #1e293b)",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "8px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          New Helper
        </button>
      </div>

      {/* Maid Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {paginatedMaids.map((maid) => (
          <div
            key={maid.id}
            style={{
              background: "#ffffff",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={maid.photo}
              alt={maid.name}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "0.75rem",
                border: "1px solid #0f172a33",
              }}
            />
            <h4 style={{ margin: "0 0 0.25rem 0", color: "#111827", fontWeight: 600, fontSize: "1rem" }}>
              {maid.name}
            </h4>
            <p style={{ margin: "0.15rem 0", color: "#6b7280", fontSize: "0.85rem" }}>{maid.phone}</p>
            <span
              style={{
                margin: "0.25rem 0",
                padding: "0.2rem 0.6rem",
                borderRadius: "20px",
                background: maid.status === "Available" ? "#D1FAE5" : "#FEF3C7",
                color: maid.status === "Available" ? "#047857" : "#B45309",
                fontWeight: 500,
                fontSize: "0.8rem",
              }}
            >
              {maid.status}
            </span>
            <p style={{ margin: "0.25rem 0", color: "#9CA3AF", fontSize: "0.8rem" }}>⭐ {maid.rating}</p>
            <button
              onClick={() => navigate(`/maids/${maid.id}`)}
              style={{
                marginTop: "0.75rem",
                background: "#2563eb",
                color: "#fff",
                padding: "0.35rem 0.75rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.85rem",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            background: currentPage === 1 ? "#f3f4f6" : "#fff",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <span style={{ fontWeight: 500 }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            background: currentPage === totalPages ? "#f3f4f6" : "#fff",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
