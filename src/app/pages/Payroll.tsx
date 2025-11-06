import { useState } from "react";

interface Employee {
  id: string;
  name: string;
  hourlyRate: number;
  hoursWorked: number;
  paymentMethod: "Cash" | "Mobile Money" | "Bank Transfer";
}

export default function PayrollPage() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "E001", name: "John Doe", hourlyRate: 15, hoursWorked: 0, paymentMethod: "Cash" },
    { id: "E002", name: "Jane Smith", hourlyRate: 18, hoursWorked: 0, paymentMethod: "Mobile Money" },
  ]);

  const handleHoursChange = (id: string, hours: number) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, hoursWorked: hours } : emp))
    );
  };

  const handlePaymentMethodChange = (id: string, method: Employee["paymentMethod"]) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, paymentMethod: method } : emp))
    );
  };

  const totalPay = (emp: Employee) => emp.hourlyRate * emp.hoursWorked;

  return (
    <div style={{ padding: "2rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>💰 Payroll</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>ID</th>
            <th style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>Name</th>
            <th style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>Hourly Rate ($)</th>
            <th style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>Hours Worked</th>
            <th style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>Payment Method</th>
            <th style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>Total Pay ($)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>{emp.id}</td>
              <td style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>{emp.name}</td>
              <td style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>{emp.hourlyRate}</td>
              <td style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>
                <input
                  type="number"
                  min={0}
                  value={emp.hoursWorked}
                  onChange={(e) => handleHoursChange(emp.id, Number(e.target.value))}
                  style={{
                    width: "70px",
                    padding: "0.25rem",
                    borderRadius: "6px",
                    border: "1px solid #d0d7de",
                  }}
                />
              </td>
              <td style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>
                <select
                  value={emp.paymentMethod}
                  onChange={(e) => handlePaymentMethodChange(emp.id, e.target.value as Employee["paymentMethod"])}
                  style={{
                    padding: "0.25rem",
                    borderRadius: "6px",
                    border: "1px solid #d0d7de",
                  }}
                >
                  <option value="Cash">Cash</option>
                  <option value="Mobile Money">Mobile Money</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </td>
              <td style={{ border: "1px solid #d0d7de", padding: "0.75rem" }}>{totalPay(emp).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "2rem", textAlign: "right", fontWeight: 600 }}>
        Total Payroll: $
        {employees.reduce((acc, emp) => acc + totalPay(emp), 0).toFixed(2)}
      </div>
    </div>
  );
}
