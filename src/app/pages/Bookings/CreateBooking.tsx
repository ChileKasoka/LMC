import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    clientId: "",
    maidId: "",
    serviceId: "",
    startDate: "",
    endDate: "",
    employmentType: "Piecework",
    hoursPerDay: "",
    notes: "",
    paymentMethod: "Cash",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/payments/process", { state: form });
  };

  // Inline styles with proper typing
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #d0d7de",
    borderRadius: "8px",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    backgroundColor: "#f9fafb",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: "0.9rem",
    color: "#1e293b",
  };

  const sectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          width: "100%",
          maxWidth: "520px",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0f172a",
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          🧾 New Booking
        </h2>

        {/* Client */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Client ID</label>
          <input
            type="text"
            name="clientId"
            value={form.clientId}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Maid */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Helper ID</label>
          <input
            type="text"
            name="maidId"
            value={form.maidId}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Service */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Service ID</label>
          <input
            type="text"
            name="serviceId"
            value={form.serviceId}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Dates */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Employment Type */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Employment Type</label>
          <select
            name="employmentType"
            value={form.employmentType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Fulltime">Full-time Helper</option>
            <option value="Piecework">Piecework (once-off job)</option>
          </select>
        </div>

        {/* Hours per Day */}
        {form.employmentType === "Piecework" && (
          <div style={sectionStyle}>
            <label style={labelStyle}>Hours per Day</label>
            <input
              type="number"
              name="hoursPerDay"
              value={form.hoursPerDay}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        )}

        {/* Notes */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Additional Notes</label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Any specific instructions or preferences..."
            value={form.notes}
            onChange={handleChange}
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />
        </div>

        {/* Payment Method */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Cash">Cash</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="Card">Card</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            background: "#0f172a",
            color: "#fff",
            padding: "0.9rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#1e293b")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#0f172a")}
        >
          Proceed to Payment →
        </button>
      </form>
    </div>
  );
}
