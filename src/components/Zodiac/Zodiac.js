import { type } from '@testing-library/user-event/dist/type/index.js';
import React from 'react';
import './Zodiac.css';

export default function zodiac({ id, name, dates, symbol }) {
  return (
    <div className="zodiac-card">
      <img alt={id} src={`../../zodiac/${name}.png}`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
      <span className="symbol">{symbol}</span>
    </div>
  );
}
