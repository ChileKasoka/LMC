import React from "react";
import type { Maid } from "./BookingFlow";

interface BookingSummaryProps {
  maid: Maid;
  onBack: () => void;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ maid, onBack }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Booking Summary</h2>
      <img src={maid.photo} alt={maid.name} style={styles.image} />
      <h3 style={styles.name}>{maid.name}</h3>
      <p style={styles.text}>📍 {maid.location}</p>
      <p style={styles.text}>Service: {maid.service}</p>
      <p style={styles.text}>Experience: {maid.experience}</p>
      <p style={styles.text}>⭐ Rating: {maid.rating}</p>
      <p style={styles.price}>Price: ZMW {maid.price}</p>

      <div style={styles.actions}>
        <button onClick={onBack} style={styles.backBtn}>
          ← Back
        </button>
        <button style={styles.confirmBtn}>Confirm Booking</button>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "white",
    borderRadius: "10px",
    padding: "2rem",
    maxWidth: "400px",
    margin: "2rem auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" },
  image: { width: "100%", borderRadius: "8px" },
  name: { fontSize: "1.25rem", fontWeight: 600, marginTop: "0.5rem" },
  text: { color: "#475569", margin: "0.25rem 0" },
  price: { fontWeight: 700, color: "#1e293b", margin: "0.5rem 0 1rem 0" },
  actions: { display: "flex", justifyContent: "space-between", marginTop: "1rem" },
  backBtn: {
    background: "#e2e8f0",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
  confirmBtn: {
    background: "#2563eb",
    border: "none",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default BookingSummary;
