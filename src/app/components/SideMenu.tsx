import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        width: isOpen ? "220px" : "60px",
        height: "100vh",
        background: "#131447ff",
        padding: "1rem",
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Top bar with toggle + logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
          marginBottom: "1rem",
        }}
      >
        {/* Logo (only show when menu is open) */}
        {isOpen && (
          <img
            src="/clean.svg" // 👈 put the file inside /public
            alt="Local Maid Center Logo"
            style={{ width: "50px", filter: "brightness(0) invert(1)" }}
          />
        )}

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: "0.5rem",
            cursor: "pointer",
            background: "#444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginLeft: isOpen ? "1rem" : "0",
          }}
        >
          {isOpen ? "←" : "→"}
        </button>
      </div>

      <br />
      {/* Navigation */}
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {[
            { to: "/", label: "Dashboard", icon: "🏠" },
            { to: "/maids", label: "Maids", icon: "👩‍🍳" },
            { to: "/clients", label: "Clients", icon: "👥" },
            { to: "/bookings", label: "Bookings", icon: "📅" },
            { to: "/services", label: "Services", icon: "🧹" },
            { to: "/payments", label: "Payments", icon: "💳" },
            { to: "/reports", label: "Reports", icon: "📊" },
            { to: "/notifications", label: "Notifications", icon: "🔔" },
            { to: "/settings", label: "Settings", icon: "⚙️" },
          ].map((item, i) => (
            <li key={i} style={{ margin: "0.5rem 0" }}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none", // 🚫 no underline
                  color: isActive ? "#4CAF50" : "#fff", // active link green
                  fontWeight: isActive ? "bold" : "normal",
                  padding: "0.5rem",
                  borderRadius: "6px",
                  transition: "background 0.2s ease",
                })}
              >
                {item.icon} {isOpen && item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
