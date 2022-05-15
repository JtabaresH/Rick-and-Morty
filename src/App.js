import React from 'react';
import Navbar from './components/Navbar';
import Universe from './components/Universe';
import banner from './assets/images/banner.svg';
import './styles.css'

export default function App() {
  return (
    <>
      <img
        src={banner}
        alt=""
        style={{
          width: '100%',
          preserveAspectRatio: 'none',
          margin: '0',
          padding: '0',
        }}
      />
      <Navbar title="Universes of Rick and Morty" />
      <Universe />
    </>
  );
}
