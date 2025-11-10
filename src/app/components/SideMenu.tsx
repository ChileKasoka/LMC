import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  icon: string;
  to?: string;
  children?: { label: string; to: string }[];
}

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: "🏠", to: "/" },
    { label: "Client Dashboard", icon: "📊", to: "/client/dashboard" },
    {
      label: "Operations",
      icon: "⚙️",
      children: [
        { label: "Maids", to: "/maids" },
        { label: "Clients", to: "/clients" },
        { label: "Bookings", to: "/bookings" },
        { label: "Availability", to: "/availability" },
        { label: "Complaints", to: "/complaints" },
      ],
    },
    {
      label: "Management",
      icon: "🏢",
      children: [
        { label: "Services", to: "/services" },
        { label: "Payments", to: "/payments" },
        { label: "Payroll", to: "/payroll" },
      ],
    },
        {
      label: "Engagement",
      icon: "🏢",
      children: [
        { label: "Messages", to: "/messages" },
        { label: "Reviews", to: "/reviews" },
        { label: "Invoices", to: "/invoices" },
      ],
    },
    {
      label: "Analytics & Reports",
      icon: "📊",
      children: [
        { label: "Performance", to: "/performance-analytics" },
        { label: "Customer", to: "/reports/customer" },
        { label: "Activity Logs", to: "/reports/activity" },
      ],
    },
    {
      label: "System",
      icon: "🧩",
      children: [
        { label: "Notifications", to: "/notifications" },
        { label: "Settings", to: "/settings" },
        { label: "User Management", to: "/user-management" },
        { label: "Policies", to: "/policies" },
      ],
    },
  ];

  return (
    <>
      {/* Overlay (for mobile view) */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: 998,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: isMobile ? "fixed" : "relative",
          top: 0,
          left: isOpen ? 0 : isMobile ? "-250px" : 0,
          width: isOpen ? "240px" : "70px",
          height: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "1rem",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 transparent",
          zIndex: 999,
          boxShadow: isMobile ? "4px 0 10px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "space-between" : "center",
            marginBottom: "1.5rem",
          }}
        >
          {isOpen && (
            <img
              src="/LHA.png"
              alt="Local Maid Center Logo"
              style={{ width: "80px", filter: "brightness(0) invert(1)" }}
            />
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuItems.map((item) => (
              <li key={item.label} style={{ marginBottom: "0.5rem" }}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.label)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isOpen ? "space-between" : "center",
                        background: "transparent",
                        border: "none",
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                        padding: "0.6rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {item.icon} {isOpen && item.label}
                      </span>
                      {isOpen && (
                        <i
                          className={`fa-solid ${
                            openMenus[item.label]
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                        ></i>
                      )}
                    </button>

                    {/* Dropdown submenu */}
                    {openMenus[item.label] && isOpen && (
                      <ul
                        style={{
                          listStyle: "none",
                          marginLeft: "1rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        {item.children.map((sub) => (
                          <li key={sub.to} style={{ marginBottom: "0.3rem" }}>
                            <NavLink
                              to={sub.to}
                              style={({ isActive }) => ({
                                display: "block",
                                padding: "0.4rem 0.6rem",
                                color: isActive ? "#22c55e" : "#cbd5e1",
                                textDecoration: "none",
                                borderRadius: "6px",
                                transition: "0.2s",
                                background: isActive ? "#1e293b" : "transparent",
                              })}
                              onClick={() => isMobile && setIsOpen(false)}
                            >
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to!}
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      textDecoration: "none",
                      color: isActive ? "#22c55e" : "#fff",
                      fontWeight: isActive ? "bold" : "normal",
                      padding: "0.6rem",
                      borderRadius: "6px",
                      transition: "background 0.2s ease",
                      background: isActive ? "#1e293b" : "transparent",
                    })}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    {item.icon} {isOpen && item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout button */}
        <div style={{ marginTop: "auto" }}>
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
              padding: "0.6rem",
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

      {/* Mobile header (hamburger) */}
      {isMobile && !isOpen && (
        <div
          style={{
            position: "fixed",
            top: 15,
            left: 15,
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: "#0f172a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "0.6rem 0.8rem",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      )}
    </>
  );
}
