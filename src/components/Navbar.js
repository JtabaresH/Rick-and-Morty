import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <h1>{title}</h1>
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="number"
              min="1"
              max="126"
              placeholder="Input ID"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
