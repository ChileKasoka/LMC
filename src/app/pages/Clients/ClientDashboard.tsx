import React from "react";

const ClientDashboard: React.FC = () => {
  const userName = "Jane Doe"; // Replace with logged-in client’s name
  const upcomingBooking = {
    maidName: "Mary Banda",
    date: "12 Nov 2025",
    time: "10:00 AM",
    status: "Confirmed",
  };

  return (
    <div style={styles.container}>
      {/* Welcome Section */}
      <section style={styles.headerSection}>
        <h2 style={styles.welcome}>Welcome back, {userName} 👋</h2>
        <p style={styles.subtitle}>Here’s what’s happening with your bookings</p>
      </section>

      {/* Summary Cards */}
      <section style={styles.cardsGrid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Upcoming Booking</h3>
          <p><strong>Maid:</strong> {upcomingBooking.maidName}</p>
          <p><strong>Date:</strong> {upcomingBooking.date}</p>
          <p><strong>Time:</strong> {upcomingBooking.time}</p>
          <p style={{ color: "#10b981", fontWeight: 600 }}>
            {upcomingBooking.status}
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Payments</h3>
          <p>💳 Last Payment: <strong>K250</strong></p>
          <p>Status: <span style={{ color: "#10b981" }}>Successful</span></p>
          <button style={styles.smallButton}>View All</button>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Messages</h3>
          <p>📩 You have <strong>2</strong> unread messages</p>
          <button style={styles.smallButton}
          onClick={() => window.location.href = "/messages"}
          >Open Inbox</button>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={styles.actionsSection}>
        <h3 style={styles.sectionTitle}>Quick Actions</h3>
        <div style={styles.actionsGrid}>
          <button style={styles.actionButton} 
            onClick={() => window.location.href = "/find-maid"}
          >📅 Find Helper</button>
          <button style={styles.actionButton}
            onClick={()=> window.location.href = "/complaints"}
          >💬 Send Complaint</button>
          <button style={styles.actionButton}>💳 Make Payment</button>
          <button style={styles.actionButton}>⭐ Leave Review</button>
        </div>
      </section>
    </div>
  );
};

// Inline CSS styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "1.5rem",
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#f9fafb",
    color: "#1e293b",
    minHeight: "100vh",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  welcome: {
    fontSize: "1.8rem",
    fontWeight: 700,
    margin: 0,
    color: "#0f172a",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#64748b",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  smallButton: {
    marginTop: "0.8rem",
    padding: "0.4rem 0.8rem",
    backgroundColor: "#1d4ed8",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  actionsSection: {
    marginTop: "2rem",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "1rem",
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
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

// Responsive tweaks (optional: add CSS file if needed)
export default ClientDashboard;
