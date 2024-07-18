import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  // Mock role check; replace with actual role logic
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 to="/">Non-Profit Organization</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
              
              <>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/events">Events</Link></li>
              </>
            
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Header;
