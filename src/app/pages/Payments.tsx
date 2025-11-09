import { useState, useEffect } from "react";

export default function Payments() {
  type PaymentStatus = "Paid" | "Pending" | "Failed";

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

  const statusColors: Record<PaymentStatus, string> = {
    Paid: "#2e7d32",
    Pending: "#f57c00",
    Failed: "#d32f2f",
  };

  const textColor = "#1a1a1a";

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        background: "#f0f2f5",
        fontFamily: "Arial, sans-serif",
        color: textColor,
      }}
    >
      <h1 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>Payments</h1>

      {!isMobile ? (
        // Desktop table
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", color: textColor }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid #eee", background: "#f7f7f7" }}>
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
                        fontWeight: 500,
                      }}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td style={{ padding: "0.8rem", color: "#555" }}>{p.date}</td>
                  <td style={{ padding: "0.8rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <button
                      style={{
                        background: "#0b1a28",
                        color: "#fff",
                        border: "none",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        flex: "1 1 45%",
                      }}
                    >
                      View
                    </button>
                    <button
                      style={{
                        background: "#680404",
                        color: "#fff",
                        border: "none",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        flex: "1 1 45%",
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
      ) : (
        // Mobile cards
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {payments.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{p.client}</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span>{p.amount}</span>
                <span style={{ color: "#555" }}>{p.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "0.3rem 0.6rem",
                    borderRadius: "6px",
                    color: "#fff",
                    background: statusColors[p.status],
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.status}
                </span>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <button
                    style={{
                      background: "#0b1a28",
                      color: "#fff",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      flex: "1 1 45%",
                    }}
                  >
                    View
                  </button>
                  <button
                    style={{
                      background: "#680404",
                      color: "#fff",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      flex: "1 1 45%",
                    }}
                  >
                    Refund
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
