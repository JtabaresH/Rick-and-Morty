import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacter(res.data);
    });
  }, [url]);
  return (
    <div className="card" style={{ maxWidth: '250px' }}>
      <h5 style={{ textAlign: 'center' }}>{character.name}</h5>
      <img src={character.image} alt="" />
      <span>
        <b>Status:</b> {character.status}
      </span>
      <span>
        <b>Specie/Gender:</b> {character.species} - {character.gender}
      </span>
      <span>
        <b>Episodes where appear:</b> {character.episode?.length}
      </span>
    </div>
  );
};

export default Characters;
