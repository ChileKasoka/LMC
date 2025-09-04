export default function Payments() {
  // Payment status type
  type PaymentStatus = "Paid" | "Pending" | "Failed";

  // Mock payment data (replace with API later)
  const payments: {
    id: number;
    client: string;
    amount: string;
    status: PaymentStatus;
    date: string;
  }[] = [
    { id: 1, client: "John Mwale", amount: "K1,200", status: "Paid", date: "2025-09-01" },
    { id: 2, client: "Chanda Phiri", amount: "K850", status: "Pending", date: "2025-09-02" },
    { id: 3, client: "Grace Banda", amount: "K1,500", status: "Failed", date: "2025-09-03" },
    { id: 4, client: "Brian Zulu", amount: "K700", status: "Paid", date: "2025-09-04" },
  ];

  // Status colors
  const statusColors: Record<PaymentStatus, string> = {
    Paid: "#2e7d32",
    Pending: "#f57c00",
    Failed: "#d32f2f",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh", color: "#000000ff" }}>
      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          overflowX: "auto",
          color: "#000000ff",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid #eee" }}>
              <th style={{ padding: "0.8rem" }}>Client</th>
              <th style={{ padding: "0.8rem" }}>Amount</th>
              <th style={{ padding: "0.8rem" }}>Status</th>
              <th style={{ padding: "0.8rem" }}>Date</th>
              <th style={{ padding: "0.8rem" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "0.8rem" }}>{p.client}</td>
                <td style={{ padding: "0.8rem" }}>{p.amount}</td>
                <td style={{ padding: "0.8rem" }}>
                  <span
                    style={{
                      padding: "0.3rem 0.6rem",
                      borderRadius: "6px",
                      color: "#fff",
                      background: statusColors[p.status],
                      fontSize: "0.85rem",
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td style={{ padding: "0.8rem", color: "#555" }}>{p.date}</td>
                <td style={{ padding: "0.8rem" }}>
                  <button
                    style={{
                      background: "#0b1a28ff",
                      color: "#fff",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginRight: "0.5rem",
                    }}
                  >
                    View
                  </button>
                  <button
                    style={{
                      background: "#680404ff",
                      color: "#fff",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
