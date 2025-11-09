import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceForm() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    materials: "",
    category: "",
    company: "",
    estimatedTime: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

    navigate("/services"); // Redirect back to list
  };

  const inputStyle = {
    padding: "0.7rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    flex: 1,
    background: "#fff",
    color: "#000",
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
          padding: isMobile ? "1.5rem" : "2rem",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          width: isMobile ? "100%" : "600px",
          maxWidth: "95%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0b1a28ff",
            fontWeight: 600,
            fontSize: isMobile ? "1.2rem" : "1.5rem",
          }}
        >
          Add New Service
        </h2>

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
          placeholder="Detailed Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{
            ...inputStyle,
            minHeight: "100px",
          }}
        />

        {/* Price + Duration */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <input
            type="number"
            name="price"
            placeholder="Price (e.g. 200)"
            value={form.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g. 2 hrs, Half Day)"
            value={form.duration}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Materials + Category */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <input
            type="text"
            name="materials"
            placeholder="Materials Needed (comma separated)"
            value={form.materials}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g. Cleaning, Cooking)"
            value={form.category}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Company + Estimated Time */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <input
            type="text"
            name="company"
            placeholder="Maid Company (optional)"
            value={form.company}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="estimatedTime"
            placeholder="Estimated Completion Time (optional)"
            value={form.estimatedTime}
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

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "0.8rem",
            border: "none",
            borderRadius: "6px",
            background: "#0b1a28ff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "#102a3aff")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "#0b1a28ff")
          }
        >
          Save Service
        </button>
      </form>
    </div>
  );
}
