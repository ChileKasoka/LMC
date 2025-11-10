import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Dummy performance data
const performanceData = [
  { id: 1, maid: "Anna", jobsCompleted: 12, rating: 4.8, earnings: 1200 },
  { id: 2, maid: "Beatrice", jobsCompleted: 8, rating: 4.2, earnings: 800 },
  { id: 3, maid: "Clara", jobsCompleted: 15, rating: 4.9, earnings: 1500 },
  { id: 4, maid: "Diana", jobsCompleted: 5, rating: 3.8, earnings: 500 },
];

const PerformanceAnalytics: React.FC = () => {
  const [data] = useState(performanceData);

  // Chart data for Jobs Completed
  const jobsChartData = {
    labels: data.map((d) => d.maid),
    datasets: [
      {
        label: "Jobs Completed",
        data: data.map((d) => d.jobsCompleted),
        backgroundColor: "#4a90e2",
      },
    ],
  };

  // Chart data for Earnings
  const earningsChartData = {
    labels: data.map((d) => d.maid),
    datasets: [
      {
        label: "Earnings ($)",
        data: data.map((d) => d.earnings),
        backgroundColor: "#f0ad4e",
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="title">Performance Analytics</h1>

      {/* Summary Section */}
      <div className="summary">
        <div className="card">
          <h2>Total Maids</h2>
          <p>{data.length}</p>
        </div>
        <div className="card">
          <h2>Total Jobs</h2>
          <p>{data.reduce((sum, item) => sum + item.jobsCompleted, 0)}</p>
        </div>
        <div className="card">
          <h2>Average Rating</h2>
          <p>
            {(
              data.reduce((sum, item) => sum + item.rating, 0) / data.length
            ).toFixed(1)}
          </p>
        </div>
        <div className="card">
          <h2>Total Earnings</h2>
          <p>${data.reduce((sum, item) => sum + item.earnings, 0)}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-card">
          <h3>Jobs Completed per Maid</h3>
          <Bar data={jobsChartData} />
        </div>
        <div className="chart-card">
          <h3>Earnings per Maid</h3>
          <Line data={earningsChartData} />
        </div>
      </div>

      {/* Performance Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Maid</th>
              <th>Jobs Completed</th>
              <th>Rating</th>
              <th>Earnings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.maid}</td>
                <td>{item.jobsCompleted}</td>
                <td>{item.rating}</td>
                <td>${item.earnings}</td>
                <td>
                  <button className="action-btn">View</button>
                  <button className="action-btn edit">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inline CSS */}
      <style>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
          background-color: #f8f9fa;
          color: #333;
        }
        .title {
          text-align: center;
          color: #4a90e2;
          margin-bottom: 20px;
        }
        .summary {
          display: flex;
          justify-content: space-around;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }
        .card {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          width: 200px;
          text-align: center;
        }
        .card h2 {
          margin-bottom: 10px;
          font-size: 16px;
        }
        .card p {
          font-size: 20px;
          font-weight: bold;
        }
        .charts {
          display: flex;
          justify-content: space-around;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .chart-card {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          flex: 1 1 300px;
          min-width: 300px;
        }
        .chart-card h3 {
          margin-bottom: 15px;
          text-align: center;
          color: #333;
        }
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background-color: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        th, td {
          padding: 12px 15px;
          text-align: left;
        }
        th {
          background-color: #4a90e2;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .action-btn {
          padding: 5px 10px;
          margin-right: 5px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background-color: #4a90e2;
          color: white;
          transition: background 0.3s;
        }
        .action-btn:hover {
          background-color: #357ab8;
        }
        .action-btn.edit {
          background-color: #f0ad4e;
        }
        .action-btn.edit:hover {
          background-color: #d6952e;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .summary, .charts {
            flex-direction: column;
            align-items: center;
          }
          .card, .chart-card {
            width: 90%;
          }
          table, th, td {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PerformanceAnalytics;
