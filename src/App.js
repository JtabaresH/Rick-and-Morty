import React from 'react';
import Navbar from './components/Navbar';
import Universe from './components/Universe';
import Footer from './components/Footer';
import banner from './assets/images/banner.svg';
import bannerR from './assets/images/rick-morty.gif'
import './styles.css';

export default function App() {
  return (
    <>
      <img
        src={bannerR}
        alt=""
        style={{
          width: '100%',
          preserveAspectRatio: 'none',
          margin: '0',
          padding: '0',
        }}
      />
      <Navbar title="Universes of Rick and Morty" />
      <Universe /> <br/>
      <Footer />
    </>
  );
}
