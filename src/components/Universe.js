import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Universe = () => {
  /* Returns a random number between min (included) and max (excluded) */
  const ramdomizer = Math.floor(Math.random() * (126 - 1)) + 1;
  const [location, setLocation] = useState([]);
  const [id, setID] = useState(ramdomizer);
  const [id2, setID2] = useState(ramdomizer);
  const [residentInfo, setResidentInfo] = useState([]);
  const [charactersURL, setCharactersURL] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdomizer}`)
      .then((res) => {
        setLocation(res.data);
        setResidentInfo(res.data.residents);
        setCharactersURL(res.data.residents);
      });
  }, []);

  const searchUniverse = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((res) => {
      setLocation(res.data);
      setResidentInfo(res.data.residents);
      setCharactersURL(res.data.residents);
    });
  };

  const searchUniverse2 = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id2}`).then((res) => {
      setLocation(res.data);
      setResidentInfo(res.data.residents);
      setCharactersURL(res.data.residents);
    });
  };

  useEffect(() => {
    searchUniverse2();
  }, [id2]);

  const charactersNumbers = 8;
  const lastIndex = charactersNumbers * page;
  const firstIndex = lastIndex - charactersNumbers;
  const charactersPaginated = charactersURL.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(charactersURL?.length / charactersNumbers);
  const numberPages = [];

  for (let i = 1; i <= lastPage; i++) {
    if (i < page + 5 && i > page - 5) {
      numberPages.push(i);
    }
  }

  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <span>
          <b style={{ color: 'white' }}>
            Swipe to move quickly through the multiverse
          </b>
        </span>
        <input
          style={{ backgroundColor: 'rgb(67, 60, 104)' }}
          className="form-control me-2"
          type="range"
          min="1"
          max="126"
          step="1"
          onChange={(e) => setID2(e.target.value)}
        />{' '}
        <br />
        <span>
          <b style={{ color: 'white' }}>Insert the ID of a universe</b>
        </span>
        <input
          style={{ backgroundColor: 'rgb(67, 60, 104)' }}
          className="form-control me-2"
          type="number"
          min="1"
          max="126"
          onChange={(e) => setID(e.target.value)}
          placeholder="Input ID"
        />{' '}
        <br />
        <button className="btn btn-outline-success" onClick={searchUniverse}>
          Search
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>{location.name}</h1>
        <span style={{ color: 'white' }}>
          <b>Type:</b> {location.type} <b>Dimension:</b> {location.dimension}{' '}
          <b>Population:</b> {location.residents?.length}
        </span>
      </div>
      {/* Superior pagination */}
      <div className="input-group justify-content-center m-3">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="btn btn-outline-primary"
        >
          First Page
        </button>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="btn btn-outline-primary"
        >
          Prev
        </button>

        {numberPages.map((numbers) => (
          <button
            key={numbers}
            onClick={() => setPage(numbers)}
            className="btn btn-outline-primary"
          >
            {numbers}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}
          className="btn btn-outline-primary"
        >
          Next
        </button>
        <button
          onClick={() => setPage(lastPage)}
          disabled={page === lastPage}
          className="btn btn-outline-primary"
        >
          Last Page
        </button>
      </div>
      {/* Characters array */}
      <div className="row justify-content-center" style={{ gap: '10px' }}>
        {charactersPaginated?.map((URLs) => (
          <ResidentInfo url={URLs} key={URLs} />
        ))}
      </div>
      {/* Inferior pagination */}
      <div className="input-group justify-content-center m-3">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="btn btn-outline-primary"
        >
          First Page
        </button>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="btn btn-outline-primary"
        >
          Prev
        </button>

        {numberPages.map((numbers) => (
          <button
            key={numbers}
            onClick={() => setPage(numbers)}
            className="btn btn-outline-primary"
          >
            {numbers}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}
          className="btn btn-outline-primary"
        >
          Next
        </button>
        <button
          onClick={() => setPage(lastPage)}
          disabled={page === lastPage}
          className="btn btn-outline-primary"
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default Universe;
