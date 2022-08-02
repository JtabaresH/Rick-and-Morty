import React from 'react';
import Navbar from './components/Navbar';
import Universe from './components/Universe';
import Footer from './components/Footer';
import banner from './assets/images/banner.svg';
import bannerGif from './assets/images/rick-morty.gif';
import rayo from './assets/images/lighting.png'
import './styles.css';

export default function App() {
  return (
    <>
      <img
        src={bannerGif}
        alt=""
        style={{
          width: '100%',
          height: '150px',
          preserveAspectRatio: 'none',
          margin: '0',
          padding: '0',
        }}
      />
      <div className="lightning lightning-a">
        <img src={rayo} />
      </div>
      <Navbar title="Universes of Rick and Morty" />
      <Universe /> <br />
      <Footer />
    </>
  );
}
