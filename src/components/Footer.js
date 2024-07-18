import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Non-Profit Organization. All rights reserved.</p>
        <p>Contact us: <a href="mailto:habibajumak0522@gmail.com" className="text-white">habibajumak0522@gmail.com</a> | Phone: 061-310-5915</p>
      </div>
    </footer>
  );
}

export default Footer;
