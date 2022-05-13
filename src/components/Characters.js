import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacter(res.data);
    });
  }, []);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt="" />
    </div>
  );
};

export default Characters;
