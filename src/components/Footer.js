import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const ramdomPhrase = Math.floor(Math.random() * (20 + 1));
  const [phrase, setPhrase] = useState();

  useEffect(() => {
    axios
      .get('https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us')
      .then((res) => {
        setPhrase(res.data);
      });
  }, []);
  return (
    <div
      className="card-footer text-center"
      style={{
        backgroundColor: 'rgb(67, 60, 104)',
      }}
    >
      <span style={{ color: 'white' }}>{phrase?.[ramdomPhrase].phrase}</span>{' '}
      <br />
      <span style={{ color: 'white' }}>
        Author: {phrase?.[ramdomPhrase].author}
      </span>
    </div>
  );
};

export default Footer;
