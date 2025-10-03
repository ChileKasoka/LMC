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

    // Instead of sending straight to backend, pass booking data to PaymentPage
    navigate("/payments/process", { state: form });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem", background: "#f0f2f5", minHeight: "100vh" }}>
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
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>New Booking</h2>

        {/* Client */}
        <input
          type="text"
          name="clientId"
          placeholder="Client ID"
          value={form.clientId}
          onChange={handleChange}
          required
        />

        {/* Maid */}
        <input
          type="text"
          name="maidId"
          placeholder="Maid ID"
          value={form.maidId}
          onChange={handleChange}
          required
        />

        {/* Service */}
        <input
          type="text"
          name="serviceId"
          placeholder="Service ID"
          value={form.serviceId}
          onChange={handleChange}
          required
        />

        {/* Dates */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required style={{ flex: 1 }} />
          <input type="date" name="endDate" value={form.endDate} onChange={handleChange} style={{ flex: 1 }} />
        </div>

        {/* Employment Type */}
        <select name="employmentType" value={form.employmentType} onChange={handleChange}>
          <option value="Fulltime">Full-time Helper</option>
          <option value="Piecework">Piecework (once-off jobs)</option>
        </select>

        {form.employmentType === "Piecework" && (
          <input
            type="number"
            name="hoursPerDay"
            placeholder="Hours per day"
            value={form.hoursPerDay}
            onChange={handleChange}
          />
        )}

        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Additional notes (optional)"
          value={form.notes}
          onChange={handleChange}
        />

        {/* Payment Method */}
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
          <option value="Cash">Cash</option>
          <option value="Mobile Money">Mobile Money</option>
          <option value="Card">Card</option>
        </select>

        <button type="submit" style={{ background: "#0b1a28ff", color: "#fff", padding: "0.7rem", borderRadius: "6px" }}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}
