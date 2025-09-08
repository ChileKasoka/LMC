import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    clientName: "",
    maidName: "",
    service: "",
    bookingType: "Piece Work",
    startDate: "",
    endDate: "",
    frequency: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", form);

    // Example API call:
    // await fetch("http://localhost:8080/api/bookings", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/bookings");
  };

  const inputStyle = {
    padding: "0.7rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    flex: 1,
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
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>New Booking</h2>

        {/* Row: Client + Maid */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            name="clientName"
            placeholder="Client Name"
            value={form.clientName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="maidName"
            placeholder="Maid Name"
            value={form.maidName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Row: Service + Booking Type */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            name="service"
            placeholder="Service (e.g. Cleaning, Laundry)"
            value={form.service}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <select
            name="bookingType"
            value={form.bookingType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Piece Work">Piece Work</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>

        {/* Row: Start + End Dates */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Frequency */}
        <select
          name="frequency"
          value={form.frequency}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Frequency</option>
          <option value="One-time">One-time</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Service Address"
          value={form.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Additional instructions (optional)"
          value={form.notes}
          onChange={handleChange}
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
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
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
