//LoginPage.jsx
import React, { useState } from 'react';
import '../Styles/LoginPage.css';
import logo from '../logo.png';
import car from '../car.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/accounts/login/', {
        username,
        password,
      });

      if (response.data.success) {
        navigate('/admin-dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid Credentials.');
    }
  };

  return (
    <div className="login-wrapper" style={{ backgroundImage: `url(${car})` }}>
      <header className="login-header">
              <div className="logo-area">
                <img src={logo} alt="RJ Logo" className="header-logo" />
                <span className="school-name">RJ ILOCANDIA DRIVING SCHOOL PORTAL</span>
              </div>
            </header>
      <div className="background-container">
        <div className="login-container">
          <div className="logo-area">
            <img src={logo} className="login-logo" alt="RJ Logo" />
          </div>
          <h2 className="loginsystem-title">INSTRUCTOR SCHEDULING AND<br />ALLOCATION MANAGEMENT SYSTEM</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
           // type="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <div className="show-password">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
          <button type="submit">Login</button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
