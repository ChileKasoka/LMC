type StatCardProps = {
  title: string;
  value: string;
  icon: string;
};

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div
      style={{
        flex: "1 1 200px",
        background: "#fff",
        borderRadius: "10px",
        padding: "1rem",
        margin: "0.5rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <span style={{ fontSize: "2rem" }}>{icon}</span>
      <div>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{value}</div>
        <div style={{ color: "#888", fontSize: "0.95rem" }}>{title}</div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        background: "#f5f5f5",
        padding: "1.5rem",
        minHeight: "100vh",   // ensures full height
        overflowY: "auto",    // enables scroll if table is long
      }}
    >
      {/* Quick Stats Section */}
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <StatCard title="Active Maids" value="12" icon="👩‍🍳" />
        <StatCard title="Clients Today" value="8" icon="👥" />
        <StatCard title="Bookings" value="15" icon="📅" />
        <StatCard title="Pending Payments" value="$320" icon="💳" />
      </section>

      {/* Overview Charts Section */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <div
          style={{
            flex: 2,
            minHeight: "250px",
            background: "#fff",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1rem", color: "#333" }}>
            Bookings Overview
          </h3>
          <div style={{ textAlign: "center", color: "#888" }}>
            Chart Placeholder
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: "250px",
            background: "#fff",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1rem", color: "#333" }}>
            Payments Received
          </h3>
          <div style={{ textAlign: "center", color: "#888" }}>
            Chart Placeholder
          </div>
        </div>
      </section>

      {/* Recent Bookings Table */}
      <section
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "#333" }}>
          Recent Bookings
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "#000000ff" }}>
          <thead>
            <tr
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                color: "#555",
              }}
            >
              <th style={{ padding: "0.5rem" }}>Client</th>
              <th style={{ padding: "0.5rem" }}>Maid</th>
              <th style={{ padding: "0.5rem" }}>Service</th>
              <th style={{ padding: "0.5rem" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "0.5rem" }}>Jane Doe</td>
              <td style={{ padding: "0.5rem" }}>Mary</td>
              <td style={{ padding: "0.5rem" }}>Cleaning</td>
              <td style={{ padding: "0.5rem", color: "#4CAF50" }}>Completed</td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem" }}>John Smith</td>
              <td style={{ padding: "0.5rem" }}>Anna</td>
              <td style={{ padding: "0.5rem" }}>Laundry</td>
              <td style={{ padding: "0.5rem", color: "#FF9800" }}>Pending</td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem" }}>Emily Rose</td>
              <td style={{ padding: "0.5rem" }}>Lucy</td>
              <td style={{ padding: "0.5rem" }}>Full House</td>
              <td style={{ padding: "0.5rem", color: "#F44336" }}>Cancelled</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
