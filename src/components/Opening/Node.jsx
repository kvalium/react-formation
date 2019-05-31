import React from 'react';
import nodeJs from '../../assets/nodejs.png';
import npm from '../../assets/npm.png';

const Node = () => (
  <section id="node">
    <img style={{width: 500, height: "auto"}} data-src={nodeJs} alt="NodeJS" />
    <p>
      1<small>er</small> version en 2009<br />
      Environnement <strong>JavaScript</strong><br />
      {/* Basé sur le moteur <strong>Chrome V8</strong><br /> */}
      Utilisé en tant que plateforme logicielle<br />
      Contient nativement un serveur Web<br />
      {/* Dernière version <strong>LTS</strong> : 10.15.x<br /> */}
    </p>
  </section>
);

export default Node;
