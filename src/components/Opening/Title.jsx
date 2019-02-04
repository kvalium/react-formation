import React from 'react';
import logo from '../../assets/react.png';

const Title = () => (
  <section id="title" data-background-color="#2a2c2e">
    <img data-src={logo} alt="React" />
    <h2><span className="white">React</span></h2>
    <p>
      <span className="white">La librairie <strong>JavaScript</strong> conçue pour les interfaces popularisée par <strong>Facebook</strong></span>
    </p>
  </section>
);

export default Title;
