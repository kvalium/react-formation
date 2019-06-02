import React from 'react';
import logo from '../../assets/react.png';

const Opening = () => (
  <section id="opening" className="dark" data-background-color="#282c34">
    <img data-src={logo} alt="React" style={{ height: 400 }} />
    <h1>React</h1>
    <i className="white">Une bibliothèque JavaScript pour créer des interfaces utilisateurs</i>
  </section>
);

export default Opening;
