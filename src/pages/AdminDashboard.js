import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="admin-links">
        <Link to="/manage-events" className="dashboard-link">
          <div className="dashboard-card">
            <h3>Manage Events</h3>
            <p>Create, edit, and delete events.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
