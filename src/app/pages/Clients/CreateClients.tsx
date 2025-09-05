import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
    preferredService: "",
    notes: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client Form submitted:", form);

    // Example API call
    // await fetch("http://localhost:8080/api/clients", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/clients"); // redirect back to clients list
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
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>Add New Client</h2>

        {/* First and Last Name Row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Phone and Email Row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={form.address}
          onChange={handleChange}
          style={inputStyle}
        />

        {/* City and Country Row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Preferred Service */}
        <select
          name="preferredService"
          value={form.preferredService}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Preferred Service</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Cooking">Cooking</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Other">Other</option>
        </select>

        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={form.notes}
          onChange={handleChange}
          style={{
            padding: "0.7rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            minHeight: "100px",
            background: "#ffffffff",
            color: "#000000ff"
          }}
        />

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
          Save Client
        </button>
      </form>
    </div>
  );
}
