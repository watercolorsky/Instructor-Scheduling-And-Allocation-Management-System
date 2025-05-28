import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Portal.css';
import logo from '../logo.png';     // School logo
import rjbg from '../rjbg.png';     // Background image

function Portal() {
  const navigate = useNavigate();

  return (
    <div className="portal-wrapper" style={{ backgroundImage: `url(${rjbg})` }}>
      {/* Header */}
      <header className="portal-header">
        <div className="logo-area">
          <img src={logo} alt="RJ Logo" className="header-logo" />
          <span className="school-name">RJ ILOCANDIA DRIVING SCHOOL PORTAL</span>
        </div>
        <div className="login-link" onClick={() => navigate('/login')}>
          <span role="img" aria-label="login">👤</span> LOGIN
        </div>
      </header>

      {/* Main Content */}
      <main className="portal-main">
        <div className="content-box">
           <h2 className="system-title">INSTRUCTOR SCHEDULING AND<br />ALLOCATION MANAGEMENT SYSTEM</h2>
          <img src={logo} alt="RJ Logo" className="main-logo" />
         
          <h1 className="main-title">RJ ILOCANDIA PORTAL</h1>
          <p className="description">
            RJ Ilocandia Driving School makes learning to drive simple and stress-free.
            With patient instructors and real-world practice, we help you drive with confidence.
          </p>
          <button className="apply-button" onClick={() => navigate('/apply')}>APPLY NOW</button>
        </div>
      </main>
    </div>
  );
}

export default Portal;