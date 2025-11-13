import React from "react";

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

interface MaidCardProps {
  maid: Maid;
  onBook: (maid: Maid) => void;
}

const MaidCard: React.FC<MaidCardProps> = ({ maid, onBook }) => {
  return (
    <div style={styles.card}>
      <img src={maid.photo} alt={maid.name} style={styles.image} />

      <div style={styles.content}>
        <h3 style={styles.name}>{maid.name}</h3>
        <p style={styles.details}>
          ⭐ {maid.rating} • {maid.experience}
        </p>
        <p style={styles.details}>
          {maid.service} • {maid.location}
        </p>
        <p style={styles.price}>K{maid.price}</p>

        <button
          onClick={() => onBook(maid)}
          style={{
            ...styles.bookButton,
            backgroundColor: maid.available ? "#10b981" : "#94a3b8",
            cursor: maid.available ? "pointer" : "not-allowed",
          }}
          disabled={!maid.available}
        >
          {maid.available ? "Book Now" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  content: {
    padding: "1rem",
    flex: 1,
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#1e293b",
    marginBottom: "0.25rem",
  },
  details: {
    fontSize: "0.9rem",
    color: "#475569",
  },
  price: {
    fontWeight: 600,
    color: "#2563eb",
    margin: "0.5rem 0",
  },
  bookButton: {
    width: "100%",
    padding: "10px 16px",
    border: "none",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
};

export default MaidCard;
