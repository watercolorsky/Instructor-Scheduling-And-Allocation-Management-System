import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portal from './Pages/Portal.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import Inquire from './Pages/Inquire.jsx';
import ApplyPage from './Pages/ApplyPage.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/inquire/:courseType" element={<Inquire />} />
      <Route path="/apply" element={<ApplyPage />} />
    </Routes>
  );
}

export default App;
