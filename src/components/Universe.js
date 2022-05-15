import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';

const Universe = () => {
  /* Returns a random number between min (included) and max (excluded) */
  const ramdomizer = Math.floor(Math.random() * (126 + 1));
  const [location, setLocation] = useState([]);
  const [id, setID] = useState(ramdomizer);
  const [id2, setID2] = useState(ramdomizer);
  const [residentInfo, setResidentInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdomizer}`)
      .then((res) => {
        setLocation(res.data);
        setResidentInfo(res.data.residents);
      });
  }, []);

  const searchUniverse = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((res) => {
      setLocation(res.data);
      setResidentInfo(res.data.residents);
    });
  };

  const searchUniverse2 = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id2}`).then((res) => {
      setLocation(res.data);
      setResidentInfo(res.data.residents);
    });
  };
  useEffect(() => {
    searchUniverse2();
  }, [id2]);

  return (
    <div className="container">
      <div className="justify-content-center text-center">
        <span>
          <b style={{ color: 'white' }}>
            Swipe to move quickly through the multiverse
          </b>
        </span>
        <div className="input-group">
          <input
            style={{
              backgroundColor: 'rgb(67, 60, 104)',
              borderColor: '#433C68',
            }}
            className="form-control me-1"
            type="range"
            min="1"
            max="126"
            step="1"
            value={id2}
            onChange={(e) => setID2(e.target.value)}
          />
          <span
            className="input-group-text"
            style={{
              backgroundColor: '#198754',
              color: 'white',
              borderColor: '#198754',
            }}
          >
            {id2}
          </span>
        </div>
        <br />
        <span>
          <b style={{ color: 'white' }}>Insert the ID of a universe</b>
        </span>
        <div className="input-group mb-3">
          <input
            style={{
              backgroundColor: 'rgb(67, 60, 104)',
              borderColor: '#433C68',
              color: 'white',
              textAlign: 'center',
            }}
            className="form-control me-1"
            type="number"
            min="1"
            max="126"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
          <button className="btn btn-success" onClick={searchUniverse}>
            Search
          </button>
        </div>
      </div>

      <div
        className="text-center rounded-3"
        style={{ backgroundColor: 'rgb(67, 60, 104)' }}
      >
        <h1 style={{ color: 'white' }}>{location.name}</h1>
        <span style={{ color: 'white' }}>
          <b>Type:</b> {location.type} <b>Dimension:</b> {location.dimension}{' '}
          <b>Population:</b> {location.residents?.length}
        </span>
      </div>

      <div className="row justify-content-center mt-5" style={{ gap: '10px' }}>
        {/* <Pagination /> */}
        {residentInfo?.map((URLs) => (
          <ResidentInfo url={URLs} key={URLs} />
        ))}
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default Universe;
