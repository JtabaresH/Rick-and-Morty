import React from 'react';

export default function App() {
  return (
    <div>
      {/* Aquí inicia el header */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Rick Sanchez -APP- Morty Smith
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* Aquí finaliza el header */}
    </div>
  );
}
