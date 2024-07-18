import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Events from './pages/Events';
import ManageEvents from './pages/ManageEvents';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path="/events" element={<Events/>} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
