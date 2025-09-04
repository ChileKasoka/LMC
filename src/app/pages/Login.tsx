import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Call backend login API
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // JWT includes company_id & role
      navigate("/"); // redirect to dashboard
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5",
      width: "100vw",
    }}>
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "400px",
        textAlign: "center",
      }}>
        <img
        src="/clean.svg"
        alt="Local Maid Center Logo"
        style={{ width: "50px", marginBottom: "2rem"}} 
        />
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
            Login
          </button>
        </form>
        <p style={{ marginTop: "1rem", textAlign: "center", color: "#333" }}>
          Don't have an account? <a href="/register" style={{ color: "#1976d2" }}>Register</a>
        </p>
      </div>
    </div>
  );
}
