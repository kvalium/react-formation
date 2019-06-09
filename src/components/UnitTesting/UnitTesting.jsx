import React from 'react';
import Config from './Config';
import Using from './Using';
import jest from '../../assets/jest.png';
import airbnb from '../../assets/airbnb.png';

const UnitTesting = () => (
  <section>
    <section id="jest" className="dark" data-background-color="#282c34">
      <img data-src={jest} alt="Jest" />
      <img data-src={airbnb} alt="AirBnB" />
      <h1>Tests Unitaires<br /><small>Jest & Enzyme</small></h1>
    </section>
    <Config />
    <Using />
  </section>
);

export default UnitTesting;
