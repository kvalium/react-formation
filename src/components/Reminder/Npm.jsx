import React from 'react';
import npm from '../../assets/npm.png';

const Npm = () => (
  <section id="npm">
    <img style={{width: 300, height: "auto"}} data-src={npm} alt="NPM" />
    <p><cite>"Every company with a website uses npm, from small development shops to the largest enterprises in the world."</cite></p>
    <p>
      Le gestionnaire de paquets pour Javascript<br />
      Une base de données de dépendances publiques et privés<br />
    </p>
  </section>
);

export default Npm;
