import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";
import DashboardHeader from "./components/DashboardHeader";
import "./App.css";
import Scheduler from "./pages/Scheduler";
import StaffList from './pages/Staff/List';
import NewStaff from './pages/Staff/New'
import ElectronicVisitVerification from './pages/evv/ElectronicVisitVerification'

function App() {
  return (
    <Router>
      <DashboardHeader />
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<Scheduler />} />
            <Route exact path="/staff/list" element={<StaffList />} />
            <Route exact path="/staff/new" element={<NewStaff />} />
            <Route exact path="/teams" element={<div></div>} />
            <Route exact path="/reports/list" element={<ElectronicVisitVerification />} />
            <Route exact path="/account" element={<div></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
