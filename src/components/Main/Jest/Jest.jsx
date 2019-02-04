import React from 'react';
import Config from './Config';
import Using from './Using';
import jest from '../../../assets/jest.png';
import airbnb from '../../../assets/airbnb.png';

const Jest = () => (
  <section>
    <section id="jest">
      <img data-src={jest} alt="Jest" />
      <img data-src={airbnb} alt="AirBnB" />
      <h2>Jest & Enzyme</h2>
    </section>
    <Config />
    <Using />
  </section>
);

export default Jest;
