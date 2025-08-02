import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">DoctorFind by Rishav</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
