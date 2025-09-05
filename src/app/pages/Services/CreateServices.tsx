import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Service Form submitted:", form);

    // Example API call:
    // await fetch("http://localhost:8080/api/services", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/services"); // go back to services list
  };

  const inputStyle = {
    padding: "0.7rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    flex: 1,
    background: "#ffffffff",
    color: "#000000ff"
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        background: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          width: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>Add New Service</h2>

        {/* Service Name */}
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Service Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{
            padding: "0.7rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            minHeight: "100px",
            background: "#ffffffff",
            color: "#000000ff"
          }}
        />

        {/* Price and Duration in same row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="number"
            name="price"
            placeholder="Price (e.g. per hour)"
            value={form.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="duration"
            placeholder="Duration (hours)"
            value={form.duration}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Status */}
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "0.7rem",
            border: "none",
            borderRadius: "6px",
            background: "#0b1a28ff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Save Service
        </button>
      </form>
    </div>
  );
}
