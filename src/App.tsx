import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./app/pages/Dashboard";
import ClientDashboard from "./app/pages/Clients/ClientDashboard";
import Settings from "./app/pages/Settings";
import Maids from "./app/pages/Maids";
import Bookings from "./app/pages/Bookings";
import Clients from "./app/pages/Clients";
import ClientDetails from "./app/pages/ClientDetails";
import Notifications from "./app/pages/Notifications";
import Payments from "./app/pages/Payments";
import Reports from "./app/pages/Reports";
import Services from "./app/pages/Services";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import CreateMaids from "./app/pages/Maids/CreateMaids";
import CreateClients from "./app/pages/Clients/CreateClients";
import CreateBooking from "./app/pages/Bookings/CreateBooking";
import CreateServices from "./app/pages/Services/CreateServices";
import PaymentProcess from "./app/pages/PaymentsModule/PaymentProcess";
import PayrollPage from "./app/pages/Payroll";
import ProfilePage from "./app/pages/Profile";
import Complaints from "./app/pages/Complaints";
import Messages from "./app/pages/Messages";
import MessagesDetails from "./app/pages/MessagesDetails";
import Reviews from "./app/pages/Reviews";
import Invoices from "./app/pages/Invoices";
import Availability from "./app/pages/Availability";
import FindMaid from "./app/pages/Clients/FindMaid";
import PerformanceAnalytics from "./app/pages/PerformanceAnalytics";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="client/dashboard" element={<ClientDashboard />} />
          <Route path="find-maid" element={<FindMaid />} />
          <Route path="maids" element={<Maids/>}/>
          <Route path="maids/create" element={<CreateMaids/>}/>
          <Route path="availability" element={<Availability/>}/>
          <Route path="clients" element={<Clients />} />
          <Route path="clients/create" element={<CreateClients />} />
          <Route path="clients/:id" element={<ClientDetails />} />
          <Route path="complaints" element={<Complaints />} />
          {/* <Route path="complaints/:id" element={<ComplaintDetails />} /> */}
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/create" element={<CreateBooking />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:id" element={<MessagesDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="services/create" element={<CreateServices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="payments/process" element={<PaymentProcess />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="payroll" element={<PayrollPage />} />
          <Route path="reports" element={<Reports />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
