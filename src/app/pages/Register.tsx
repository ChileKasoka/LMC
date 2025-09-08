import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    adminName: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    if (response.ok) {
      alert("Company registered successfully! Please login.");
      navigate("/login");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5",
      width: "100vw"
    }}>
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "550px",
        textAlign: "center",
      }}>
        <img
        src="/LHA.png"
        alt="Local Maid Center Logo"
        style={{ width: "70px", marginBottom: "2rem"}} 
        />
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={form.companyName}
            onChange={handleChange}
            required
            style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #ddddddff", background: "#ffffffff", color: "#000000ff" }}
          />
          <input
            type="text"
            name="adminName"
            placeholder="Admin Name"
            value={form.adminName}
            onChange={handleChange}
            required
            style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #ddddddff", background: "#ffffffff", color: "#000000ff" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #ddddddff", background: "#ffffffff", color: "#000000ff" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #ddddddff", background: "#ffffffff", color: "#000000ff" }}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #ddddddff", background: "#ffffffff", color: "#000000ff" }}
          />
          <button
            type="submit"
            style={{
              padding: "0.7rem",
              border: "none",
              borderRadius: "6px",
              background: "#121e2aff",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Register
          </button>
        </form>
        <p style={{ marginTop: "1rem", textAlign: "center", color: "#333" }}>
          Already have an account? <a href="/login" style={{ color: "#1976d2" }}>Login</a>
        </p>
      </div>
    </div>
  );
}
