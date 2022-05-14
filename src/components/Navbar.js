import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div>
      <nav className="navbar-light bg-light">
        <div className="container-fluid">
          <h1 style={{ textAlign: 'center' }}>{title}</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
