import { useState, useEffect } from "react";

interface Employee {
  id: string;
  name: string;
  hourlyRate: number;
  startDate: string;
  endDate: string;
  workCompleted: boolean;
  paymentMethod: "Cash" | "Mobile Money" | "Bank Transfer";
  workedDays: string[];
  paid: boolean;
}

export default function PayrollPage() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "E001", name: "John Doe", hourlyRate: 15, startDate: "", endDate: "", workCompleted: false, paymentMethod: "Cash", workedDays: [], paid: false },
    { id: "E002", name: "Jane Smith", hourlyRate: 18, startDate: "", endDate: "", workCompleted: false, paymentMethod: "Mobile Money", workedDays: [], paid: false },
    { id: "E003", name: "Alice Mwansa", hourlyRate: 20, startDate: "", endDate: "", workCompleted: false, paymentMethod: "Bank Transfer", workedDays: [], paid: false },
  ]);

  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);
  const [filter, setFilter] = useState<"All" | "Paid" | "Unpaid">("Unpaid");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (id: string, field: keyof Employee, value: any) => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === id ? { ...emp, [field]: value } : emp))
    );
  };

  const datesBetween = (start: string, end: string) => {
    if (!start || !end) return [];
    const startDate = new Date(start);
    const endDate = new Date(end);
    const dates = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      dates.push(d.toISOString().split("T")[0]);
    }
    return dates;
  };

  const toggleWorkedDay = (empId: string, date: string) => {
    setEmployees(prev =>
      prev.map(emp => {
        if (emp.id !== empId) return emp;
        if (emp.paid) return emp; // cannot change paid employee
        let newWorkedDays = [...emp.workedDays];
        if (newWorkedDays.includes(date)) newWorkedDays = newWorkedDays.filter(d => d !== date);
        else newWorkedDays.push(date);
        return { ...emp, workedDays: newWorkedDays };
      })
    );
  };

  const calculateDaysWorked = (emp: Employee) => emp.workCompleted ? emp.workedDays.length : 0;
  const totalHours = (days: number) => days * 8;
  const totalPay = (emp: Employee) => emp.hourlyRate * totalHours(calculateDaysWorked(emp));

  const disbursePayment = (emp: Employee) => {
    alert(`Payment of $${totalPay(emp).toFixed(2)} for ${emp.name} disbursed via ${emp.paymentMethod}`);
    setEmployees(prev =>
      prev.map(e => e.id === emp.id ? { ...e, paid: true } : e)
    );
  };

  const disburseAll = () => {
    filteredEmployees.forEach(emp => disbursePayment(emp));
  };

  const openModal = (emp: Employee) => {
    if (emp.paid) return;
    setSelectedEmp(emp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmp(null);
    setModalOpen(false);
  };

  // Filtering employees based on selected filter
  const filteredEmployees = employees.filter(emp => {
    if (filter === "All") return true;
    if (filter === "Paid") return emp.paid;
    if (filter === "Unpaid") return !emp.paid;
    return true;
  });

  const totalPayroll = filteredEmployees.reduce((acc, emp) => acc + totalPay(emp), 0);

  return (
    <div style={{ padding: "1rem", fontFamily: "'Inter', sans-serif", background: "#fefefe", color: "#1a1a1a", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem", fontWeight: 700, fontSize: "2rem" }}>Payroll Dashboard</h1>

      {/* Filter */}
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <label>
          Show:{" "}
          <select value={filter} onChange={e => setFilter(e.target.value as any)} style={{ padding: "0.3rem", borderRadius: "5px", border: "1px solid #d0d7de" }}>
            <option value="All">All</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
          </select>
        </label>
      </div>

      {/* Desktop Table */}
      {!isMobile && (
        <div style={{ overflowX: "auto", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", background: "#fff", border: "1px solid #9a9a9aff" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
            <thead>
              <tr style={{ background: "#f0f2f5", color: "#1a1a1a" }}>
                <th style={{ padding: "0.8rem" }}>ID</th>
                <th style={{ padding: "0.8rem" }}>Name</th>
                <th style={{ padding: "0.8rem", textAlign: "right" }}>Rate ($)</th>
                <th style={{ padding: "0.8rem", textAlign: "center" }}>Start</th>
                <th style={{ padding: "0.8rem", textAlign: "center" }}>End</th>
                <th style={{ padding: "0.8rem", textAlign: "center" }}>Completed</th>
                <th style={{ padding: "0.8rem", textAlign: "center" }}>Days</th>
                <th style={{ padding: "0.8rem", textAlign: "right" }}>Hours</th>
                <th style={{ padding: "0.8rem", textAlign: "center" }}>Payment</th>
                <th style={{ padding: "0.8rem", textAlign: "right" }}>Total ($)</th>
                <th style={{ padding: "0.8rem", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp, idx) => (
                <tr key={emp.id} style={{ background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "0.5rem" }}>{emp.id}</td>
                  <td style={{ padding: "0.5rem" }}>{emp.name}</td>
                  <td style={{ padding: "0.5rem", textAlign: "right" }}>{emp.hourlyRate.toFixed(2)}</td>
                  <td style={{ padding: "0.5rem", textAlign: "center" }}>
                    <input type="date" value={emp.startDate} onChange={e => handleChange(emp.id, "startDate", e.target.value)} style={{ padding: "0.25rem", borderRadius: "5px", border: "1px solid #d0d7de" }} disabled={emp.paid} />
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "center" }}>
                    <input type="date" value={emp.endDate} onChange={e => handleChange(emp.id, "endDate", e.target.value)} style={{ padding: "0.25rem", borderRadius: "5px", border: "1px solid #d0d7de" }} disabled={emp.paid} />
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "center" }}>
                    <input type="checkbox" checked={emp.workCompleted} onChange={e => handleChange(emp.id, "workCompleted", e.target.checked)} style={{ accentColor: "#0b1a28", width: "20px", height: "20px" }} disabled={emp.paid} />
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "center" }}>
                    {calculateDaysWorked(emp)}
                    {emp.workCompleted && emp.startDate && emp.endDate && !emp.paid && (
                      <button onClick={() => openModal(emp)} style={{ marginLeft: "0.3rem", padding: "0.2rem 0.4rem", fontSize: "0.8rem" }}>Edit</button>
                    )}
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "right" }}>{totalHours(calculateDaysWorked(emp))}</td>
                  <td style={{ padding: "0.5rem", textAlign: "center" }}>
                    <select value={emp.paymentMethod} onChange={e => handleChange(emp.id, "paymentMethod", e.target.value)} style={{ padding: "0.25rem", borderRadius: "5px", border: "1px solid #d0d7de" }} disabled={emp.paid}>
                      <option value="Cash">Cash</option>
                      <option value="Mobile Money">Mobile Money</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "right", fontWeight: 600 }}>${totalPay(emp).toFixed(2)}</td>
                  <td style={{ padding: "0.5rem", textAlign: "center" }}>
                    {!emp.paid && <button onClick={() => disbursePayment(emp)} style={{ padding: "0.25rem 0.5rem", background: "#0b1a28", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Pay</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Cards */}
      {isMobile && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredEmployees.map(emp => (
            <div key={emp.id} style={{ background: "#fff", borderRadius: "10px", padding: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: "0.5rem", border: "1px solid #151414ff" }}>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a" }}>{emp.name} ({emp.id})</div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span>Rate: ${emp.hourlyRate.toFixed(2)}</span>
                <span>Days: {calculateDaysWorked(emp)}</span>
                <span>Hours: {totalHours(calculateDaysWorked(emp))}</span>
                <span>Total: ${totalPay(emp).toFixed(2)}</span>
              </div>
              <label style={{ display: "flex", justifyContent: "space-between" }}>Start:
                <input type="date" value={emp.startDate} onChange={e => handleChange(emp.id, "startDate", e.target.value)} style={{ padding: "0.25rem", borderRadius: "5px", border: "1px solid #d0d7de" }} disabled={emp.paid} />
              </label>
              <label style={{ display: "flex", justifyContent: "space-between" }}>End:
                <input type="date" value={emp.endDate} onChange={e => handleChange(emp.id, "endDate", e.target.value)} style={{ padding: "0.25rem", borderRadius: "5px", border: "1px solid #d0d7de" }} disabled={emp.paid} />
              </label>
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>Completed:
                <input type="checkbox" checked={emp.workCompleted} onChange={e => handleChange(emp.id, "workCompleted", e.target.checked)} style={{ accentColor: "#0b1a28" }} disabled={emp.paid} />
              </label>
              {emp.workCompleted && emp.startDate && emp.endDate && !emp.paid && (
                <button onClick={() => openModal(emp)} style={{ padding: "0.3rem 0.5rem", fontSize: "0.85rem", borderRadius: "5px", border: "1px solid #0b1a28", background: "#fff", color: "#0b1a28" }}>Edit Days</button>
              )}
              <label style={{ display: "flex", justifyContent: "space-between" }}>Payment:
                <select value={emp.paymentMethod} onChange={e => handleChange(emp.id, "paymentMethod", e.target.value)} style={{ padding: "0.25rem", borderRadius: "5px", border: "1px solid #d0d7de" }} disabled={emp.paid}>
                  <option value="Cash">Cash</option>
                  <option value="Mobile Money">Mobile Money</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </label>
              {!emp.paid && <button onClick={() => disbursePayment(emp)} style={{ padding: "0.5rem", background: "#0b1a28", color: "#fff", border: "none", borderRadius: "5px" }}>Pay</button>}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "2rem", textAlign: "right", fontWeight: 700, fontSize: "1.1rem", color: "#1a1a1a" }}>
        Total Payroll ({filter}): ${totalPayroll.toFixed(2)}
      </div>

      {filteredEmployees.some(emp => !emp.paid) && (
        <button onClick={disburseAll} style={{ marginTop: "1rem", padding: "0.6rem 1.2rem", background: "#0b1a28", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Disburse All
        </button>
      )}

      {/* Modal */}
      {modalOpen && selectedEmp && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", width: "90%", maxWidth: "400px", maxHeight: "80vh", overflowY: "auto" }}>
            <h2 style={{ marginBottom: "1rem", fontWeight: 700, color: "#1a1a1a" }}>Select Worked Days for {selectedEmp.name}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {datesBetween(selectedEmp.startDate, selectedEmp.endDate).map(date => (
                <label key={date} style={{ flex: "0 0 20%", fontSize: "0.85rem" }}>
                  <input type="checkbox" checked={selectedEmp.workedDays.includes(date)} onChange={() => toggleWorkedDay(selectedEmp.id, date)} style={{ accentColor: "#0b1a28" }} disabled={selectedEmp.paid} />
                  {new Date(date).getDate()}
                </label>
              ))}
            </div>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
              <button onClick={closeModal} style={{ padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", background: "#d0d7de" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
