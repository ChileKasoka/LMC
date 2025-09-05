import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    client: "",
    maid: "",
    serviceType: "",
    date: "",
    time: "",
    duration: "",
    notes: "",
    status: "Pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Form submitted:", form);

    // Example API call:
    // await fetch("http://localhost:8080/api/bookings", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    navigate("/bookings"); // redirect back to bookings list
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
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>New Booking</h2>

        {/* Client and Maid Row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            name="client"
            placeholder="Client Name"
            value={form.client}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="maid"
            placeholder="Maid Name"
            value={form.maid}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Service Type */}
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Service</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Cooking">Cooking</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Other">Other</option>
        </select>

        {/* Date and Time Row */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Duration */}
        <input
          type="number"
          name="duration"
          placeholder="Duration (hours)"
          value={form.duration}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Special Instructions / Notes"
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
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
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
          Save Booking
        </button>
      </form>
    </div>
  );
}
