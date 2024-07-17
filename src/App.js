import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OPD from './pages/OPD';
import Pharmacy from './pages/Pharmacy';
import Login from './pages/Login';
import Patient from './pages/Patient';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const isAuthenticated = () => {
  return localStorage.getItem('authenticated') === 'true';
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-container">
          {isAuthenticated() && <Sidebar />}
          <div className="main-content">
            <div className="content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/opd" element={isAuthenticated() ? <OPD /> : <Navigate to="/login" />} />
                <Route path="/pharmacy" element={isAuthenticated() ? <Pharmacy /> : <Navigate to="/login" />} />
                <Route path="/patient" element={isAuthenticated() ? <Patient /> : <Navigate to="/login" />} />
                <Route path="/" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
              </Routes>
            </div>
          </div>
        </div>
        {isAuthenticated() && <Footer />}
      </div>
    </Router>
  );
}

export default App;
