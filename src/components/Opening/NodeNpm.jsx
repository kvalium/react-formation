import React from 'react';
import nodeJs from '../../assets/nodejs.png';
import npm from '../../assets/npm.png';

const NodeNpm = () => (
  <section id="node">
    <img data-src={nodeJs} alt="NodeJS" />
    <img data-src={npm} alt="NPM" />
    <p>
      1<small>er</small> version en 2009<br />
      Environnement <strong>JavaScript</strong><br />
      Basé sur le moteur <strong>Chrome V8</strong><br />
      Utilisé en tant que plateforme logicielle<br />
      Contient nativement un serveur Web<br />
      Dernière version <strong>LTS</strong> : 10.15.x<br />
      Gestionnaire de paquets <small>(officiel)</small>
    </p>
  </section>
);

export default NodeNpm;
