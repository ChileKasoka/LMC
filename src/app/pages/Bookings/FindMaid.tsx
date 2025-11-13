import React from "react";
import type { Maid } from "./BookingFlow";

interface FindMaidProps {
  maids: Maid[];
  onBook: (maid: Maid) => void;
}

const FindMaid: React.FC<FindMaidProps> = ({ maids, onBook }) => {
  return (
    <div style={styles.grid}>
      {maids.map((maid) => (
        <div key={maid.id} style={styles.card}>
          <img src={maid.photo} alt={maid.name} style={styles.image} />
          <h3 style={styles.name}>{maid.name}</h3>
          <p style={styles.text}>📍 {maid.location}</p>
          <p style={styles.text}>⭐ {maid.rating} | {maid.experience}</p>
          <p style={styles.text}>{maid.service}</p>
          <p style={styles.price}>ZMW {maid.price}</p>
          <button
            style={{
              ...styles.button,
              backgroundColor: maid.available ? "#2563eb" : "#94a3b8",
              cursor: maid.available ? "pointer" : "not-allowed",
            }}
            disabled={!maid.available}
            onClick={() => maid.available && onBook(maid)}
          >
            {maid.available ? "Book Now" : "Unavailable"}
          </button>
        </div>
      ))}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    background: "white",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginTop: "0.5rem",
  },
  text: {
    color: "#475569",
    fontSize: "0.9rem",
    margin: "0.25rem 0",
  },
  price: {
    fontWeight: 700,
    color: "#1e293b",
    marginTop: "0.5rem",
  },
  button: {
    marginTop: "0.75rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: 600,
  },
};

export default FindMaid;
