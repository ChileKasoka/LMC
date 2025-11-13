import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import FindMaid from "./FindMaid";

const FindMaidContainer: React.FC = () => {
  const navigate = useNavigate();

  const [maids] = useState([
    {
      id: 1,
      name: "Mary Banda",
      photo: "/maids/mary.jpg",
      rating: 4.8,
      location: "Lusaka",
      service: "House Cleaning",
      price: 250,
      available: true,
      experience: "3 years",
    },
    {
      id: 2,
      name: "Sarah Mwila",
      photo: "/maids/sarah.jpg",
      rating: 4.5,
      location: "Ndola",
      service: "Laundry",
      price: 180,
      available: true,
      experience: "2 years",
    },
  ]);

  const handleBook = (maid: any) => {
    console.log("Booking maid:", maid.name);
    navigate("/booking-flow", { state: { maid } }); // pass maid data via route state
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Find Your Maid 🧹</h1>
      <FindMaid maids={maids} onBook={handleBook} />
    </div>
  );
};

export default FindMaidContainer;
