import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./app/pages/Dashboard";
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="maids" element={<Maids/>}/>
          <Route path="maids/create" element={<CreateMaids/>}/>
          <Route path="clients" element={<Clients />} />
          <Route path="clients/create" element={<CreateClients />} />
          <Route path="clients/:id" element={<ClientDetails />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/create" element={<CreateBooking />} />
          <Route path="services" element={<Services />} />
          <Route path="services/create" element={<CreateServices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
