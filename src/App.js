import React from 'react';
import Navbar from './components/Navbar';
import Universe from './components/Universe';
import Footer from './components/Footer';
import banner from './assets/images/banner.svg';
import bannerGif from './assets/images/rick-morty.gif';
import './styles.css';

export default function App() {
  return (
    <>
      <img
        src={banner}
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
        <img src="https://www.onlygfx.com/wp-content/uploads/2018/08/10-realistic-lightning-bolt-1.png" />
      </div>
      <Navbar title="Universes of Rick and Morty" />
      <Universe /> <br />
      <Footer />
    </>
  );
}
