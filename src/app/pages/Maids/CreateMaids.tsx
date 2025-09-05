import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MaidForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    experience: "",
    salary: "",
    skills: "",
    status: "Available",
    photo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    // Example API call:
    // await fetch("http://localhost:8080/api/maids", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/maids"); // Redirect back to maids list
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
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>Add New Maid</h2>

        {/* Name + Age in one row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              flex: 2,
              padding: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#ffffffff",
              color: "#000000ff"
            }}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#ffffffff",
              color: "#000000ff"
            }}
          />
        </div>

        {/* Phone + Address */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={{
              flex: 1,
              padding: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#ffffffff",
              color: "#000000ff"
            }}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            style={{
              flex: 2,
              padding: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#ffffffff",
              color: "#000000ff"
            }}
          />
        </div>

        {/* Experience + Salary */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="number"
            name="experience"
            placeholder="Experience (years)"
            value={form.experience}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#ffffffff",
              color: "#000000ff"
            }}
          />
          <input
            type="text"
            name="salary"
            placeholder="Expected Salary"
            value={form.salary}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#ffffffff",
              color: "#000000ff"
            }}
          />
        </div>

        {/* Skills */}
        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={handleChange}
          style={{
            padding: "0.7rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            background: "#ffffffff",
            color: "#000000ff"
          }}
        />

        {/* Status */}
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          style={{
            padding: "0.7rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            background: "#ffffffff",
            color: "#000000ff"
          }}
        >
          <option value="Available">Available</option>
          <option value="Busy">Busy</option>
        </select>

        {/* Photo */}
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          style={{
            padding: "0.7rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            background: "#ffffffff",
            color: "#000000ff"
          }}
        />

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
          Save Maid
        </button>
      </form>
    </div>
  );
}
