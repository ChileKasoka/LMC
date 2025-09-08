import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

  // Extract page name from path
  let pageName = location.pathname.substring(1); // remove leading "/"
  if (!pageName || pageName === "") pageName = "Dashboard"; // default
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1); // capitalize

  return (
    <header
      style={{
        width: "100%",
        height: "60px",
        background: "#444",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        flexShrink: 0,
      }}
    >
      <h1 style={{ fontSize: "1.2rem", margin: 0 }}>{pageName}</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingRight: "5rem" }}>
        <span>👤 Admin</span>
        <span>🔔</span>
      </div>
    </header>
  );
}
