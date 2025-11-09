import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MaidForm() {
  const navigate = useNavigate();

  // Mock company data (replace with API call later)
  const companies = [
    { id: 1, name: "Sparkle Cleaners Ltd" },
    { id: 2, name: "HomeCare Professionals" },
    { id: 3, name: "Pure Maid Services" },
  ];

  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    nationalId: "",
    experience: "",
    salary: "",
    skills: "",
    companyId: "",
    nextOfKin: "",
    emergencyContact: "",
    latitude: "",
    longitude: "",
    username: "",
    password: "",
    status: "Available",
    photo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle location pinning manually
  const handlePinLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setForm((prev) => ({
            ...prev,
            latitude: pos.coords.latitude.toString(),
            longitude: pos.coords.longitude.toString(),
          }));
        },
        (err) => {
          alert("Unable to retrieve location. Please enter manually.");
          console.error(err);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Maid registered:", form);

    // Example API call
    // await fetch("http://localhost:8080/api/maids", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/maids");
  };

  const inputStyle = {
    padding: "0.7rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#ffffffff",
    color: "#000000ff",
    flex: 1,
  };

  const rowStyle = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
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
          width: "100%",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>Register New Maid</h2>

        {/* Maid Info */}
        <div style={rowStyle}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <select name="gender" value={form.gender} onChange={handleChange} style={inputStyle}>
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Contact Info */}
        <div style={rowStyle}>
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

        {/* Address and NRC */}
        <div style={rowStyle}>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="nationalId"
            placeholder="National ID / NRC"
            value={form.nationalId}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Company Association */}
        <div style={rowStyle}>
          <select
            name="companyId"
            value={form.companyId}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Independent (No Company)</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Experience and Salary */}
        <div style={rowStyle}>
          <input
            type="number"
            name="experience"
            placeholder="Experience (years)"
            value={form.experience}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="salary"
            placeholder="Expected Salary (ZMW)"
            value={form.salary}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Skills */}
        <textarea
          name="skills"
          placeholder="Skills (e.g., Cleaning, Cooking, Babysitting)"
          value={form.skills}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "80px" }}
        />

        {/* Next of Kin + Emergency Contact */}
        <div style={rowStyle}>
          <input
            type="text"
            name="nextOfKin"
            placeholder="Next of Kin Name"
            value={form.nextOfKin}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="tel"
            name="emergencyContact"
            placeholder="Emergency Contact Number"
            value={form.emergencyContact}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Location Pinning */}
        <div style={rowStyle}>
          <input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={form.latitude}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={form.longitude}
            onChange={handleChange}
            style={inputStyle}
          />
          <button
            type="button"
            onClick={handlePinLocation}
            style={{
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.7rem 1rem",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            📍 Pin Current Location
          </button>
        </div>

        {/* System User Account */}
        <h3 style={{ marginTop: "1rem", color: "#0b1a28ff" }}>System Account Details</h3>
        <div style={rowStyle}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
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
          <option value="Available">Available</option>
          <option value="Busy">Busy</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Photo */}
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          style={inputStyle}
        />

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
          }}
        >
          Save Maid
        </button>
      </form>
    </div>
  );
}
