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
    <li>
      <div className="card">
        <h4>{character.name}</h4>
        <img src={character.image} alt="" />
      </div>
    </li>
  );
};

export default Characters;
