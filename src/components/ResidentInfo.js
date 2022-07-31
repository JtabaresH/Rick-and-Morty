import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacter(res.data);
    });
  }, [url]);
  return (
    <div
      className="card text-center"
      style={{
        maxWidth: '250px',
        boxShadow: '2px 3px 5px grey',
        backgroundColor: '#8C8C8C',
      }}
    >
      <h5 className="text-wrap">{character.name}</h5>
      <img src={character.image} alt="" />
      <span>
        <b>Status:</b> {character.status}
      </span>
      <span>
        <b>Specie/Gender:</b> {character.species} - {character.gender}
      </span>
      <span>
        <b>Origin:</b> {character.origin?.name}
      </span>
      <span>
        <b>Episodes where appear:</b> {character.episode?.length}
      </span>
    </div>
  );
};

export default ResidentInfo;
