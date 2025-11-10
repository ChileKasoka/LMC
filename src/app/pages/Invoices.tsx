import { useState, useEffect } from "react";
import { Download, FileText, Search } from "lucide-react";

interface Invoice {
  id: number;
  client: string;
  service: string;
  amount: number;
  dateIssued: string;
  dueDate: string;
  status: "Paid" | "Pending" | "Overdue";
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Mock data for demo; replace with API call
    const mockInvoices: Invoice[] = [
      {
        id: 1001,
        client: "Mary Zulu",
        service: "House Cleaning",
        amount: 350,
        dateIssued: "2025-10-25",
        dueDate: "2025-10-30",
        status: "Paid",
      },
      {
        id: 1002,
        client: "John Banda",
        service: "Laundry Service",
        amount: 200,
        dateIssued: "2025-11-01",
        dueDate: "2025-11-05",
        status: "Pending",
      },
      {
        id: 1003,
        client: "Sarah Mwila",
        service: "Office Cleaning",
        amount: 800,
        dateIssued: "2025-10-15",
        dueDate: "2025-10-20",
        status: "Overdue",
      },
    ];
    setInvoices(mockInvoices);
  }, []);

  const filteredInvoices = invoices.filter(
    (i) =>
      i.client.toLowerCase().includes(search.toLowerCase()) ||
      i.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="invoices-page">
      <style>{`
        .invoices-page {
          min-height: 100vh;
          background: #f8fafc;
          font-family: "Segoe UI", Tahoma, sans-serif;
          color: #0b1a28;
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }
        h2 {
          text-align: center;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #0b1a28;
        }
        .search-bar {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          padding: 0.5rem 1rem;
          max-width: 400px;
          margin: 0 auto 1.5rem;
        }
        .search-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: #1e293b;
          margin-left: 0.5rem;
        }
        .invoices-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        th, td {
          padding: 0.9rem 1rem;
          text-align: left;
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
        .status {
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .Paid {
          background: #dcfce7;
          color: #166534;
        }
        .Pending {
          background: #fef9c3;
          color: #854d0e;
        }
        .Overdue {
          background: #fee2e2;
          color: #991b1b;
        }
        .action-btn {
          background: #0b1a28;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.4rem 0.8rem;
          cursor: pointer;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .action-btn:hover {
          background: #12293d;
        }

.invoices-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

/* hide mobile cards by default */
.invoice-cards {
  display: none;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .invoices-table {
    display: none;
  }

  .invoice-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .invoice-card {
    background: white;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }

  .invoice-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .invoice-client {
    font-weight: 600;
    color: #0b1a28;
  }

  .invoice-service {
    color: #475569;
    font-size: 0.9rem;
  }

  .invoice-meta {
    font-size: 0.85rem;
    color: #475569;
    margin-top: 0.5rem;
  }
}

        }
      `}</style>

      <h2>Invoices</h2>

      <div className="search-bar">
        <Search size={18} color="#475569" />
        <input
          type="text"
          placeholder="Search by client or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Full-screen Table */}
      <table className="invoices-table">
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Client</th>
            <th>Service</th>
            <th>Amount (ZMW)</th>
            <th>Date Issued</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.client}</td>
              <td>{invoice.service}</td>
              <td>{invoice.amount.toFixed(2)}</td>
              <td>{invoice.dateIssued}</td>
              <td>{invoice.dueDate}</td>
              <td>
                <span className={`status ${invoice.status}`}>{invoice.status}</span>
              </td>
              <td>
                <button className="action-btn">
                  <Download size={14} />
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="invoice-cards">
        {filteredInvoices.map((invoice) => (
          <div className="invoice-card" key={invoice.id}>
            <div className="invoice-header">
              <div>
                <div className="invoice-client">{invoice.client}</div>
                <div className="invoice-service">{invoice.service}</div>
              </div>
              <span className={`status ${invoice.status}`}>{invoice.status}</span>
            </div>
            <div className="invoice-meta">💰 Amount: ZMW {invoice.amount.toFixed(2)}</div>
            <div className="invoice-meta">📅 Issued: {invoice.dateIssued}</div>
            <div className="invoice-meta">⏰ Due: {invoice.dueDate}</div>
            <button className="action-btn" style={{ marginTop: "0.8rem" }}>
              <FileText size={14} />
              View / Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
