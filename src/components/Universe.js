import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './Characters';
import Pagination from './Pagination';

const Universe = () => {
  /* Returns a random number between min (included) and max (excluded) */
  const ramdomizer = Math.floor(Math.random() * (126 + 1));
  const [location, setLocation] = useState([]);
  const [id, setID] = useState("");
  const [id2, setID2] = useState("");
  const [charactersURL, setCharactersURL] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdomizer}`)
      .then((res) => {
        setLocation(res.data);
        setCharactersURL(res.data.residents);
      });
  }, []);

  const searchUniverse = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((res) => {
      setLocation(res.data);
      setCharactersURL(res.data.residents);
    });
  };

  const searchUniverse2 = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id2}`).then((res) => {
      setLocation(res.data);
      setCharactersURL(res.data.residents);
    });
  };

  useEffect(() => {
    searchUniverse2();
  }, [id2]);

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
          style={{ backgroundColor: 'rgb(67, 60, 104)', color: "white" }}
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

      <div className="row justify-content-center" style={{ gap: '10px' }}>
        <Pagination />
        {charactersURL?.map((URLs) => (
          <Characters url={URLs} key={URLs} />
        ))}
        <Pagination />
      </div>
    </div>
  );
};

export default Universe;
