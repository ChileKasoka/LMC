import React, { useState } from "react";

interface Maid {
  id: number;
  name: string;
  photo: string;
  rating: number;
  location: string;
  service: string;
  price: number;
  available: boolean;
  experience: string;
}

const maidsData: Maid[] = [
  {
    id: 1,
    name: "Mary Banda",
    photo: "/maid1.jpg",
    rating: 4.8,
    location: "Lusaka",
    service: "House Cleaning",
    price: 250,
    available: true,
    experience: "3 years",
  },
  {
    id: 2,
    name: "Sarah Mwila",
    photo: "/maid2.jpg",
    rating: 4.5,
    location: "Ndola",
    service: "Laundry Service",
    price: 180,
    available: true,
    experience: "2 years",
  },
  {
    id: 3,
    name: "Chipo Mulenga",
    photo: "/maid3.jpg",
    rating: 4.9,
    location: "Kitwe",
    service: "Babysitting",
    price: 300,
    available: false,
    experience: "5 years",
  },
];

const FindMaid: React.FC = () => {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All");
  const [rating, setRating] = useState(0);

  const filteredMaids = maidsData.filter((maid) => {
    return (
      maid.name.toLowerCase().includes(search.toLowerCase()) &&
      (service === "All" || maid.service === service) &&
      maid.rating >= rating
    );
  });

  return (
    <div style={styles.container}>
      {/* Header */}
      <h2 style={styles.title}>Find Your Perfect Maid 🧹</h2>
      <p style={styles.subtitle}>
        Search and filter to discover reliable, experienced maids near you.
      </p>

      {/* Filter Bar */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={styles.select}
        >
          <option>All</option>
          <option>House Cleaning</option>
          <option>Laundry Service</option>
          <option>Babysitting</option>
        </select>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={styles.select}
        >
          <option value={0}>All Ratings</option>
          <option value={4}>4★ and above</option>
          <option value={4.5}>4.5★ and above</option>
        </select>
      </div>

      {/* Maid Cards */}
      <div style={styles.grid}>
        {filteredMaids.length > 0 ? (
          filteredMaids.map((maid) => (
            <div key={maid.id} style={styles.card}>
              <img src={maid.photo} alt={maid.name} style={styles.image} />
              <h3 style={styles.maidName}>{maid.name}</h3>
              <p style={styles.service}>{maid.service}</p>
              <p style={styles.details}>
                📍 {maid.location} | ⭐ {maid.rating.toFixed(1)}
              </p>
              <p style={styles.details}>Experience: {maid.experience}</p>
              <p style={styles.price}>ZMW {maid.price.toFixed(2)}</p>
              <p
                style={{
                  color: maid.available ? "#16a34a" : "#dc2626",
                  fontWeight: 600,
                }}
              >
                {maid.available ? "Available" : "Unavailable"}
              </p>
              <div style={styles.actions}>
                <button style={styles.viewButton}>View Profile</button>
                {maid.available && (
                  <button style={styles.bookButton}>Book Now</button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noResult}>No maids found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

// Styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "1.5rem",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    textAlign: "center",
    color: "#0f172a",
  },
  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "1.5rem",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  searchInput: {
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    width: "220px",
  },
  select: {
    padding: "0.6rem 0.8rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1rem",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    height: "180px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "0.8rem",
  },
  maidName: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#111827",
  },
  service: {
    color: "#2563eb",
    fontWeight: 500,
  },
  details: {
    color: "#64748b",
    fontSize: "0.9rem",
  },
  price: {
    fontWeight: 600,
    color: "#1e293b",
    marginTop: "0.5rem",
  },
  actions: {
    marginTop: "0.8rem",
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
  },
  viewButton: {
    padding: "0.4rem 0.8rem",
    border: "1px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    borderRadius: "6px",
    cursor: "pointer",
  },
  bookButton: {
    padding: "0.4rem 0.8rem",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  noResult: {
    textAlign: "center",
    color: "#9ca3af",
    fontStyle: "italic",
  },
};

export default FindMaid;
