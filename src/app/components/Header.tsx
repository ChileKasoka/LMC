export default function Header() {
  return (
    <header
      style={{
        width: "100%",            // full width of content wrapper
        height: "60px",
        background: "#444",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // push left and right elements apart
        padding: "0 1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        flexShrink: 0,
      }}
    >
      {/* Left: Page Title */}
      <h1 style={{ fontSize: "1.2rem", margin: 0 }}>Dashboard</h1>

      {/* Right: User info / notifications */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingRight: "5rem" }}>
        <span>👤 Admin</span>
        <span>🔔</span> {/* Notification icon */}
      </div>
    </header>
  );
}
