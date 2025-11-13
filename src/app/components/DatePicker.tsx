import React from "react";
import DatePicker from "react-datepicker";

interface Props {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const DateFilter: React.FC<Props> = ({ selectedDate, setSelectedDate }) => (
  <div className="flex justify-end mb-4">
    <DatePicker
      selected={selectedDate}
      onChange={setSelectedDate}
      placeholderText="Filter by date"
      className="border border-gray-300 rounded-lg p-2 text-sm"
    />
  </div>
);

export default DateFilter;
