import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientForm() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [form, setForm] = useState({
    clientType: "Individual",
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
    preferredService: "",
    notes: "",
    status: "Active",
    latitude: "",
    longitude: "",
  });

  // Responsive detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported on this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm({
          ...form,
          latitude: pos.coords.latitude.toString(),
          longitude: pos.coords.longitude.toString(),
        });
      },
      (err) => {
        console.error(err);
        alert("Unable to retrieve your location.");
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client Form submitted:", form);

    // API example
    // await fetch("http://localhost:8080/api/clients", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/clients");
  };

  const inputStyle: React.CSSProperties = {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    flex: 1,
    background: "#ffffff",
    color: "#000",
    fontSize: "0.95rem",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: "0.9rem",
    color: "#1e293b",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "1.5rem" : "3rem",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: isMobile ? "1.5rem" : "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0b1a28",
            marginBottom: "0.5rem",
            fontSize: isMobile ? "1.25rem" : "1.6rem",
          }}
        >
          🧍‍♀️ New Client Registration
        </h2>

        {/* Client Type */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={labelStyle}>Client Type</label>
          <select
            name="clientType"
            value={form.clientType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Individual">Individual</option>
            <option value="Company">Company</option>
          </select>
        </div>

        {/* Name Fields */}
        {form.clientType === "Individual" ? (
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
            }}
          >
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
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={labelStyle}>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={form.companyName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        )}

        {/* Phone & Email */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
          }}
        >
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={labelStyle}>Street Address</label>
          <input
            type="text"
            name="address"
            placeholder="Street or Plot Number"
            value={form.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* City & Country */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
          }}
        >
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

        {/* Location pinning */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={labelStyle}>Location (for maps)</label>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={form.latitude}
              onChange={handleChange}
              style={inputStyle}
              readOnly
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={form.longitude}
              onChange={handleChange}
              style={inputStyle}
              readOnly
            />
            <button
              type="button"
              onClick={handleGetLocation}
              style={{
                background: "#0b1a28",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "0.7rem 1rem",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              📍 Pin My Location
            </button>
          </div>
        </div>

        {/* Preferred Service */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={labelStyle}>Preferred Service</label>
          <select
            name="preferredService"
            value={form.preferredService}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Service</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Cooking">Cooking</option>
            <option value="Babysitting">Babysitting</option>
            <option value="Laundry">Laundry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Notes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={labelStyle}>Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any preferences or special instructions..."
            value={form.notes}
            onChange={handleChange}
            style={{
              ...inputStyle,
              minHeight: "100px",
              resize: "none",
            }}
          />
        </div>

        {/* Status */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={labelStyle}>Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            background: "#0b1a28",
            color: "#fff",
            padding: "0.9rem",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#1e293b")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#0b1a28")}
        >
          💾 Save Client
        </button>
      </form>
    </div>
  );
}
