import React from 'react';
import './Zodiac.css';

export default function zodiac({ name, dates, symbol }) {
  return (
    <div className="zodiac-card">
      <img src={`${process.env.PUBLIC_URL}/zodiac/${name}.png`} />
      {/* <span className="name">{name}</span> */}
      <span className="dates">{dates}</span>
      <span className="symbol">{symbol}</span>
    </div>
  );
}
