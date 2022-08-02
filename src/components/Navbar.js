import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <nav>
        <div className="container-fluid">
          <h1 style={{ textAlign: 'center', color: 'white' }}>{title}</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
