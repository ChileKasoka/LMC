import React from "react";

interface Filters {
  search: string;
  service: string;
  rating: number;
}

interface MaidFiltersProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const MaidFilters: React.FC<MaidFiltersProps> = ({ filters, setFilters }) => {
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Search maids..."
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <select
        style={styles.select}
        value={filters.service}
        onChange={(e) => setFilters({ ...filters, service: e.target.value })}
      >
        <option>All</option>
        <option>House Cleaning</option>
        <option>Laundry</option>
        <option>Babysitting</option>
      </select>
      <select
        style={styles.select}
        value={filters.rating}
        onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}
      >
        <option value={0}>All Ratings</option>
        <option value={4}>4+</option>
        <option value={4.5}>4.5+</option>
      </select>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    width: "200px",
  },
  select: {
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
  },
};

export default MaidFilters;
