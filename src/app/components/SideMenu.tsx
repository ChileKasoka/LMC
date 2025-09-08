import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens / session if needed
    // localStorage.removeItem("token"); // example
    console.log("Logging out...");
    navigate("/login"); // redirect to login page
  };

  return (
    <div
      style={{
        width: isOpen ? "220px" : "60px",
        height: "100vh",
        background: "#131447ff",
        padding: "1rem",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between", // ensures logout at bottom
        overflow: "scroll",
        scrollbarWidth: "thin",
        scrollbarColor: "#888 transparent"
      }}
    >
      {/* Top section */}
      <div>
        {/* Logo + toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "space-between" : "center",
            marginBottom: "1rem",
          }}
        >
          {isOpen && (
            <img
              src="/LHA.png"
              alt="Local Maid Center Logo"
              style={{ width: "70px", filter: "brightness(0) invert(1)" }}
            />
          )}

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
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>

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
                    textDecoration: "none",
                    color: isActive ? "#4CAF50" : "#fff",
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

      {/* Logout button at bottom */}
      <div>
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#e53935",
            color: "#fff",
            border: "none",
            padding: "0.5rem",
            borderRadius: "6px",
            cursor: "pointer",
            justifyContent: isOpen ? "flex-start" : "center",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          {isOpen && "Logout"}
        </button>
      </div>
    </div>
  );
}
