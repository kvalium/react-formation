import React from 'react';
import logo from '../../assets/react.png';

const Title = () => (
  <section id="title" data-background-color="#2a2c2e">
    <img data-src={logo} alt="React" />
    <h2><span className="white">React</span></h2>
    <i className="white">Une bibliothèque JavaScript pour créer des interfaces utilisateurs</i>
  </section>
);

export default Title;
