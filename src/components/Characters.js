import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {

   /* Returns a random number between min (included) and max (excluded) */
   const ramdomizer = Math.floor(Math.random() * (127 - 1)) + 1;
   const [location, setLocation] = useState([]);
 
   useEffect(() => {
     axios
       .get(`https://rickandmortyapi.com/api/location/${ramdomizer}`)
       .then((res) => {
         setLocation(res.data);
       });
   }, []);
   console.log(location);

  return (
    <div className="container">
      <h1>{location.name}</h1>
      <span><b>Type:</b> {location.type} <b>Dimension:</b> {location.dimension} <b>Population:</b> {location.resident}</span>
    </div>
  );
};

export default Characters;
