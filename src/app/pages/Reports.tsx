export default function Reports() {
  // Mock summary data (replace with API data later)
  const summary = [
    { label: "Total Clients", value: 120 },
    { label: "Active Maids", value: 45 },
    { label: "Bookings This Month", value: 78 },
    { label: "Revenue (ZMW)", value: "K25,400" },
  ];

  // Mock table data
  const reports = [
    { id: 1, service: "House Cleaning", bookings: 30, revenue: "K6,000" },
    { id: 2, service: "Laundry", bookings: 20, revenue: "K3,000" },
    { id: 3, service: "Cooking", bookings: 18, revenue: "K3,240" },
    { id: 4, service: "Child Care", bookings: 10, revenue: "K13,160" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {summary.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "1.2rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "0.9rem", color: "#666" }}>{item.label}</span>
            <strong style={{ fontSize: "1.4rem", color: "#1976d2", marginTop: "0.5rem" }}>
              {item.value}
            </strong>
          </div>
        ))}
      </div>

      {/* Detailed Reports Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ margin: "0 0 1rem 0", color: "#333" }}>Service Performance</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd", color: "#555" }}>
              <th style={{ padding: "0.75rem" }}>Service</th>
              <th style={{ padding: "0.75rem" }}>Bookings</th>
              <th style={{ padding: "0.75rem" }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((row) => (
              <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "0.75rem" }}>{row.service}</td>
                <td style={{ padding: "0.75rem" }}>{row.bookings}</td>
                <td style={{ padding: "0.75rem" }}>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
