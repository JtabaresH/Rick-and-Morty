import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Universe = () => {
  /* Returns a random number between min (included) and max (excluded) */
  const ramdomizer = Math.floor(Math.random() * (127 - 1)) + 1;
  const [location, setLocation] = useState([]);
  const [charactersURL, setCharactersURL] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdomizer}`)
      .then((res) => {
        setLocation(res.data);
        setCharactersURL(res.data.residents);
      });
  }, []);
  console.log(location);
  console.log(charactersURL);

  return (
    <div className="container">
      <h1>{location.name}</h1>
      <span>
        <b>Type:</b> {location.type} <b>Dimension:</b> {location.dimension}{' '}
        <b>Population:</b> {location.residents?.length}
      </span>

      <div className="row">
        {charactersURL.map((item, index) => (
          <div key={index} className="col">
            <div className="card">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universe;
