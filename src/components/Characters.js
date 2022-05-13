import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacter(res.data);
    });
  }, [url]);
  console.log(character);
  return (
    <li>
      <div className="card">
        <h4>{character.name}</h4>
        <img src={character.image} alt="" />
        <span><b>{character.status} - {character.type}</b></span>
      </div>
    </li>
  );
};

export default Characters;
