import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  // const location = useLocation();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const pathParts = location.pathname
  //   .split("/")
  //   .filter((p) => p)
  //   .map((p) => p.charAt(0).toUpperCase() + p.slice(1));

  // const pageTitle = pathParts.length > 0 ? pathParts.join(" / ") : "Dash";

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <header
      style={{
        width: "100%",
        background: "#1e293b",
        color: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "0.5rem 1rem" : "0 1.5rem",
        height: "64px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      {/* Left Section: Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flexShrink: 0,
          minWidth: "fit-content",
        }}
      >
        {/* Sidebar toggle (mobile)
        {isMobile && (
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#f8fafc",
              fontSize: "1.4rem",
              cursor: "pointer",
            }}
            onClick={() => console.log("Sidebar toggle")}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        )} */}
        {/* <h1
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#f1f5f9",
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: isMobile ? "160px" : "250px",
          }}
        >
          {pageTitle}
        </h1> */}
      </div>

      {/* Center Section: Search (hidden or collapsible on mobile) */}
      {!isMobile && (
        <div
          style={{
            background: "#334155",
            borderRadius: "6px",
            padding: "0.4rem 0.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flex: 1,
            maxWidth: "300px",
            margin: "0 1rem",
          }}
        >
          <i className="fa-solid fa-search" style={{ color: "#94a3b8" }}></i>
          <input
            type="text"
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#f8fafc",
              fontSize: "0.9rem",
              width: "100%",
            }}
          />
        </div>
      )}

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Mobile search icon */}
        {isMobile && (
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#f8fafc",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
            onClick={() => console.log("Open search")}
          >
            <i className="fa-solid fa-search"></i>
          </button>
        )}

        {/* Notifications */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#f8fafc",
              fontSize: "1.2rem",
              position: "relative",
            }}
          >
            <i className="fa-regular fa-bell"></i>
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "3px",
                width: "8px",
                height: "8px",
                background: "#ef4444",
                borderRadius: "50%",
              }}
            ></span>
          </button>

          {showNotifications && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                background: "#334155",
                color: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                width: "240px",
                padding: "0.5rem",
                zIndex: 50,
              }}
            >
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
                🔔 No new notifications
              </p>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "transparent",
              marginRight: "3.2rem",
              border: "none",
              color: "#f8fafc",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            <i className="fa-solid fa-user-circle"></i>
            {!isMobile && <span>Admin</span>}
            <i
              className={`fa-solid ${
                showProfileMenu ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              style={{ fontSize: "0.8rem" }}
            ></i>
          </button>

          {showProfileMenu && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                background: "#334155",
                color: "white",
                borderRadius: "8px",
                marginRight: "3.4rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                width: "180px",
                zIndex: 50,
              }}
            >
              {[
                { label: "Profile", icon: "fa-user", action: () => navigate("/profile") },
                { label: "Settings", icon: "fa-cog", action: () => navigate("/settings") },
                { label: "Logout", icon: "fa-right-from-bracket", action: handleLogout },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: "white",
                    textAlign: "left",
                    padding: "0.6rem 1rem",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.background = "#475569")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.background = "transparent")
                  }
                >
                  <i className={`fa-solid ${item.icon}`}></i> {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
