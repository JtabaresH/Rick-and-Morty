import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <h1>{title}</h1>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
