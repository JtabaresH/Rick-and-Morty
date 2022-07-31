import React from 'react';
import quotes from './quotes.json';

const Footer = () => {
  const ramdomPhrase = Math.floor(Math.random() * 20);

  return (
    <div
      className="card-footer text-center"
      style={{
        backgroundColor: '#000000',
      }}
    >
      <span style={{ color: 'white' }}>{quotes[ramdomPhrase].phrase}</span>{' '}
      <br />
      <span style={{ color: 'white' }}>
        Author: {quotes[ramdomPhrase].author}
      </span>
    </div>
  );
};

export default Footer;
