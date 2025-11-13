import React, { useState } from "react";
import MaidFilters from "./MaidFilters";
import FindMaid from "./FindMaid";
import BookingSummary from "./BookingSummary";

export interface Maid {
  id: number;
  name: string;
  photo: string;
  rating: number;
  location: string;
  service: string;
  price: number;
  available: boolean;
  experience: string;
}

const maidsData: Maid[] = [
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
  {
    id: 3,
    name: "Chipo Mulenga",
    photo: "/maids/chipo.jpg",
    rating: 4.9,
    location: "Kitwe",
    service: "Babysitting",
    price: 300,
    available: false,
    experience: "5 years",
  },
];

const BookingFlow: React.FC = () => {
  const [maids] = useState<Maid[]>(maidsData);
  const [filters, setFilters] = useState({ search: "", service: "All", rating: 0 });
  const [selectedMaid, setSelectedMaid] = useState<Maid | null>(null);

  const filteredMaids = maids.filter((maid) => {
    return (
      maid.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.service === "All" || maid.service === filters.service) &&
      maid.rating >= filters.rating
    );
  });

  return (
    <div style={styles.container}>
      {!selectedMaid ? (
        <>
          <div style={styles.header}>
            <h1 style={styles.title}>Find Your Perfect Maid 🧹</h1>
            <p style={styles.subtitle}>
              Search, filter, and book professional maids easily.
            </p>
          </div>

          <MaidFilters filters={filters} setFilters={setFilters} />
          <FindMaid maids={filteredMaids} onBook={(maid) => setSelectedMaid(maid)} />
        </>
      ) : (
        <BookingSummary maid={selectedMaid} onBack={() => setSelectedMaid(null)} />
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "2rem 1rem",
    background: "#f8fafc",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#64748b",
    fontSize: "1rem",
  },
};

export default BookingFlow;
