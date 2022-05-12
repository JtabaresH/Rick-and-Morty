import React from 'react';
import Navbar from './components/Navbar';
import Universe from './components/Universe';

export default function App() {
  return (
    <>
      <Navbar title="Universes of Rick and Morty" />
      <Universe />
    </>
  );
}
