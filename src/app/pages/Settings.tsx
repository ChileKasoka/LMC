import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@maidcenter.com",
    password: "",
    notifications: true,
    theme: "light",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Settings saved ✅");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "#f0f2f5", padding: "1rem", minHeight: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "1.5rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          width: "75%",
          margin: "0 auto",
        }}
      >
        {/* Profile Info */}
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "6px",
              border: "1px solid #ddd",
              background: "#fff",
              color: "#0b1a28ff"
            }}
          />
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "6px",
              border: "1px solid #ddd",
              background: "#fff",
              color: "#0b1a28ff"
            }}
          />
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "6px",
              border: "1px solid #ddd",
              background: "#fff",
              color: "#0b1a28ff"
            }}
          />
        </div>

        {/* Preferences */}
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Theme
          </label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "6px",
              border: "1px solid #ddd",
              background: "#fff",
              color: "#0b1a28ff"
            }}
          >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
            />
            Enable Email Notifications
          </label>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          style={{
            background: "#0b1a28ff",
            color: "#fff",
            border: "none",
            padding: "0.8rem 1.2rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
