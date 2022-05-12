import React from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';

export default function App() {
  return (
    <>
      <Navbar title="Universes of Rick and Morty" />
      <Characters />
    </>
  );
}
