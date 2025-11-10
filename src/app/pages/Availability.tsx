import { useState } from "react";
import { CalendarDays, Save } from "lucide-react";

interface DayAvailability {
  day: string;
  available: boolean;
  startTime: string;
  endTime: string;
}

export default function AvailabilityPage() {
  const [availability, setAvailability] = useState<DayAvailability[]>([
    { day: "Monday", available: true, startTime: "08:00", endTime: "17:00" },
    { day: "Tuesday", available: true, startTime: "08:00", endTime: "17:00" },
    { day: "Wednesday", available: true, startTime: "08:00", endTime: "17:00" },
    { day: "Thursday", available: true, startTime: "08:00", endTime: "17:00" },
    { day: "Friday", available: true, startTime: "08:00", endTime: "17:00" },
    { day: "Saturday", available: false, startTime: "09:00", endTime: "14:00" },
    { day: "Sunday", available: false, startTime: "", endTime: "" },
  ]);

  const handleToggle = (index: number) => {
    const updated = [...availability];
    updated[index].available = !updated[index].available;
    setAvailability(updated);
  };

  const handleTimeChange = (
    index: number,
    field: "startTime" | "endTime",
    value: string
  ) => {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  };

  const handleSave = () => {
    console.log("Saved availability:", availability);
    alert("Availability saved successfully!");
  };

  return (
    <div className="availability-page">
      <style>{`
        .availability-page {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          color: #0b1a28;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #0b1a28;
          margin-bottom: 1rem;
        }
        .availability-card {
          width: 100%;
          max-width: 700px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          padding: 1rem;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          text-align: left;
          padding: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }
        th {
          background: #0b1a28;
          color: white;
          font-weight: 600;
        }
        tr:last-child td {
          border-bottom: none;
        }
        input[type="time"] {
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 0.3rem;
          font-size: 0.9rem;
          color: #0b1a28;
        }
        .toggle-btn {
          background: #e2e8f0;
          color: #0b1a28;
          border: none;
          border-radius: 20px;
          padding: 0.3rem 0.9rem;
          cursor: pointer;
          font-size: 0.85rem;
          transition: 0.3s;
        }
        .toggle-btn.active {
          background: #0b1a28;
          color: white;
        }
        .save-btn {
          margin-top: 1rem;
          background: #0b1a28;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: 0.3s;
        }
        .save-btn:hover {
          background: #12293d;
        }

        /* Mobile layout */
        @media (max-width: 768px) {
          table, thead, tbody, th, td, tr {
            display: block;
          }
          th {
            display: none;
          }
          tr {
            background: white;
            margin-bottom: 1rem;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          }
          td {
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            font-size: 0.9rem;
          }
          td::before {
            content: attr(data-label);
            font-weight: 600;
            color: #0b1a28;
          }
        }
      `}</style>

      <h2>
        <CalendarDays size={22} /> Manage Availability
      </h2>

      <div className="availability-card">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Available</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {availability.map((day, index) => (
              <tr key={day.day}>
                <td data-label="Day">{day.day}</td>
                <td data-label="Available">
                  <button
                    className={`toggle-btn ${day.available ? "active" : ""}`}
                    onClick={() => handleToggle(index)}
                  >
                    {day.available ? "Yes" : "No"}
                  </button>
                </td>
                <td data-label="Start">
                  <input
                    type="time"
                    value={day.startTime}
                    onChange={(e) =>
                      handleTimeChange(index, "startTime", e.target.value)
                    }
                    disabled={!day.available}
                  />
                </td>
                <td data-label="End">
                  <input
                    type="time"
                    value={day.endTime}
                    onChange={(e) =>
                      handleTimeChange(index, "endTime", e.target.value)
                    }
                    disabled={!day.available}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="save-btn" onClick={handleSave}>
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
}
