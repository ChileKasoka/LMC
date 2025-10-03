import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentProcess() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  if (!booking) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No booking details found.</p>;
  }

  const handlePayment = async () => {
    console.log("Processing payment for booking:", booking);

    // Example API call:
    // await fetch("http://localhost:8080/api/bookings", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(booking),
    // });

    alert("Payment successful!");
    navigate("/bookings");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem", background: "#f0f2f5", minHeight: "100vh" }}>
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          width: "500px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0b1a28ff" }}>Payment</h2>

        <h3>Booking Summary</h3>
        <p><strong>Client:</strong> {booking.clientId}</p>
        <p><strong>Maid:</strong> {booking.maidId}</p>
        <p><strong>Service:</strong> {booking.serviceId}</p>
        <p><strong>Dates:</strong> {booking.startDate} → {booking.endDate || "N/A"}</p>
        <p><strong>Employment:</strong> {booking.employmentType}</p>
        {booking.employmentType === "Piecework" && <p><strong>Hours/day:</strong> {booking.hoursPerDay}</p>}
        {booking.notes && <p><strong>Notes:</strong> {booking.notes}</p>}
        <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>

        <button
          onClick={handlePayment}
          style={{
            marginTop: "1rem",
            background: "#0b1a28ff",
            color: "#fff",
            padding: "0.7rem",
            borderRadius: "6px",
            width: "100%",
          }}
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
