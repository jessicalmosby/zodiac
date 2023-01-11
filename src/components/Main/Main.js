import React from 'react';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac.js';
import { zodiac } from '../../data.js';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <Zodiac key={item.id} {...item} />
      ))}
    </main>
  );
}
