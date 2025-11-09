import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function ProfilePage() {
  const navigate = useNavigate();

  const user = {
    name: "Mary Banda",
    role: "Maid - Fulltime",
    email: "marybanda@example.com",
    phone: "+260 977 123 456",
    location: "Lusaka, Zambia",
    experience: "3 years",
    company: "Bright Maids Co.",
    joined: "Jan 2023",
    photo: "/maid1.jpg",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <style>
        {`
        .profile-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: #f9fafb;
          color: #1e293b;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .profile-header {
          background: #0b1a28;
          color: white;
          text-align: center;
          padding: 1.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .profile-header h1 {
          font-size: 1.8rem;
          margin: 0;
        }

        .profile-card {
          background: white;
          margin: 2rem auto;
          padding: 2.5rem;
          width: 80%;
          max-width: 800px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #0b1a28;
        }

        .profile-role {
          color: #475569;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .profile-info {
          margin-top: 1rem;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 1rem 0;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.7rem;
          color: #334155;
          font-size: 0.95rem;
          justify-content: center;
        }

        .icon {
          color: #0b1a28;
        }

        .employment-section {
          text-align: center;
          margin-top: 1.5rem;
        }

        .employment-section h3 {
          color: #0b1a28;
          font-size: 1.1rem;
          margin-bottom: 0.7rem;
        }

        .recent-activity {
          text-align: center;
          margin-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          padding-top: 1rem;
        }

        .recent-activity h3 {
          color: #0b1a28;
          margin-bottom: 0.5rem;
        }

        .recent-activity ul {
          list-style: none;
          padding: 0;
          color: #334155;
          font-size: 0.9rem;
        }

        .recent-activity li {
          margin-bottom: 0.4rem;
        }

        /* Logout footer only visible on mobile */
        .logout-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          border-top: 1px solid #e2e8f0;
          padding: 1rem;
          display: flex;
          justify-content: center;
        }

        .logout-button {
          background: #6d0700;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.7rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease-in-out;
        }

        .logout-button:hover {
          background: #8b0a04;
        }

        /* Desktop view */
        @media (min-width: 768px) {
          .profile-card {
            padding: 3rem;
            width: 70%;
          }

          .logout-footer {
            display: none;
          }
        }

        /* Mobile view */
        @media (max-width: 600px) {
          .profile-card {
            width: 95%;
            padding: 1.5rem;
            margin-bottom: 3rem;
          }

          .profile-header h1 {
            font-size: 1.4rem;
          }

          .logout-button {
            width: 90%;
            justify-content: center;
          }
        }
      `}
      </style>

      {/* Header */}
      <header className="profile-header">
        <h1>Profile</h1>
      </header>

      {/* Profile Card */}
      <section className="profile-card">
        <img src={user.photo} alt={user.name} className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="profile-role">{user.role}</p>

        <div className="profile-info">
          <div className="info-item">
            <Mail size={18} className="icon" />
            <span>{user.email}</span>
          </div>
          <div className="info-item">
            <Phone size={18} className="icon" />
            <span>{user.phone}</span>
          </div>
          <div className="info-item">
            <MapPin size={18} className="icon" />
            <span>{user.location}</span>
          </div>
        </div>

        <div className="employment-section">
          <h3>Employment Details</h3>
          <div className="info-item">
            <Briefcase size={18} className="icon" />
            <span>Company: {user.company}</span>
          </div>
          <div className="info-item">
            <User size={18} className="icon" />
            <span>Experience: {user.experience}</span>
          </div>
          <div className="info-item">
            <Calendar size={18} className="icon" />
            <span>Joined: {user.joined}</span>
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>✅ Completed 12 bookings</li>
            <li>⭐ Average Rating: 4.8</li>
            <li>💬 3 new client reviews</li>
          </ul>
        </div>
      </section>

      {/* Logout Button (only visible on mobile) */}
      <footer className="logout-footer">
        <button onClick={handleLogout} className="logout-button">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </footer>
    </div>
  );
}
