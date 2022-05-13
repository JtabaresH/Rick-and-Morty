import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './Characters';

const Universe = () => {
  /* Returns a random number between min (included) and max (excluded) */
  const ramdomizer = Math.floor(Math.random() * (127 - 1)) + 1;
  const [location, setLocation] = useState([]);
  const [id, setID] = useState();
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
    });
  };

  useEffect(() => {
    searchUniverse();
  }, [id]);

  return (
    <div className="container">
      <div>
        <input
          className="form-control me-2"
          type="range"
          min="1"
          max="126"
          step="1"
          onChange={(e) => setID(e.target.value)}
          placeholder="Input ID"
        />
        {/* <button className="btn btn-outline-success" onClick={searchUniverse}>
          Search
        </button> */}
      </div>

      <h1>{location.name}</h1>
      <span>
        <b>Type:</b> {location.type} <b>Dimension:</b> {location.dimension}{' '}
        <b>Population:</b> {location.residents?.length}
      </span>

      <ul>
        {charactersURL?.map((URLs) => (
          <Characters url={URLs} key={URLs} />
        ))}
      </ul>
    </div>
  );
};

export default Universe;
