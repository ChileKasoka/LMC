import React, { useState } from "react";
import { Home } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ClientDashboard: React.FC = () => {
  const userName = "Jane Doe"; // Replace with logged-in client’s name

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const bookings = [
    { maidName: "Mary Banda", date: "2025-11-12", time: "10:00 AM", status: "Confirmed" },
    { maidName: "Grace Mwila", date: "2025-11-15", time: "02:00 PM", status: "Pending" },
  ];

  const upcomingBooking = selectedDate
    ? bookings.find(
        (b) => new Date(b.date).toDateString() === selectedDate.toDateString()
      )
    : bookings[0];

  return (
    <div style={styles.container}>
      {/* Top Navigation with Home Button */}
      <div style={styles.topNav}>
        <button
          style={styles.homeButton}
          onClick={() => (window.location.href = "/home")}
        >
          <Home size={18} style={{ marginRight: "6px" }} />
          Home
        </button>
      </div>

      {/* Header */}
      <section style={styles.headerSection}>
        <h2 style={styles.welcome}>Welcome back, {userName} 👋</h2>
        <p style={styles.subtitle}>Here’s what’s happening with your bookings</p>
      </section>

      {/* Date Picker Filter */}
      <div style={styles.datePickerContainer}>
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          placeholderText="Filter by date"
          dateFormat="dd MMM yyyy"
          className="date-picker"
        />
      </div>

      {/* Summary Cards */}
      <section style={styles.cardsGrid}>
        <div style={{ ...styles.card, ...styles.gradientCard1 }}>
          <h3 style={styles.cardTitle}>Upcoming Booking</h3>
          {upcomingBooking ? (
            <>
              <p>
                <strong>Maid:</strong> {upcomingBooking.maidName}
              </p>
              <p>
                <strong>Date:</strong> {upcomingBooking.date}
              </p>
              <p>
                <strong>Time:</strong> {upcomingBooking.time}
              </p>
              <p style={{ color: "#10b981", fontWeight: 600 }}>
                {upcomingBooking.status}
              </p>
            </>
          ) : (
            <p>No booking found for that date.</p>
          )}
        </div>

        <div style={{ ...styles.card, ...styles.gradientCard2 }}>
          <h3 style={styles.cardTitle}>Payments</h3>
          <p>
            💳 Last Payment: <strong>K250</strong>
          </p>
          <p>
            Status: <span style={{ color: "#10b981" }}>Successful</span>
          </p>
          <button style={styles.smallButton}>View All</button>
        </div>

        <div style={{ ...styles.card, ...styles.gradientCard3 }}>
          <h3 style={styles.cardTitle}>Messages</h3>
          <p>
            📩 You have <strong>2</strong> unread messages
          </p>
          <button
            style={styles.smallButton}
            onClick={() => (window.location.href = "/messages")}
          >
            Open Inbox
          </button>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={styles.actionsSection}>
        <h3 style={styles.sectionTitle}>Quick Actions</h3>
        <div style={styles.actionsGrid}>
          <button
            style={styles.actionButton}
            onClick={() => (window.location.href = "/find-maid")}
          >
            📅 Find Helper
          </button>
          <button
            style={styles.actionButton}
            onClick={() => (window.location.href = "/complaints")}
          >
            💬 Send Complaint
          </button>
          <button style={styles.actionButton}>💳 Make Payment</button>
          <button style={styles.actionButton}>⭐ Leave Review</button>
        </div>
      </section>
    </div>
  );
};

// Styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "2rem",
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#f0f4f8",
    color: "#1e293b",
    minHeight: "100vh",
  },
  topNav: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "1rem",
  },
  homeButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "0.6rem 1rem",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  welcome: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#0f172a",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#64748b",
  },
  datePickerContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "1.5rem",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.2rem",
    marginBottom: "2rem",
  },
  card: {
    padding: "1.2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    color: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "0.7rem",
  },
  gradientCard1: {
    background: "linear-gradient(135deg, #4f46e5, #2563eb)",
  },
  gradientCard2: {
    background: "linear-gradient(135deg, #10b981, #047857)",
  },
  gradientCard3: {
    background: "linear-gradient(135deg, #f59e0b, #b45309)",
  },
  smallButton: {
    marginTop: "0.8rem",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(255,255,255,0.25)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s ease",
  },
  actionsSection: {
    marginTop: "2rem",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#0f172a",
  },
  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "1rem",
  },
  actionButton: {
    padding: "1rem",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

export default ClientDashboard;
