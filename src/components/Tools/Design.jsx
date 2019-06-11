import React from 'react';
import less from '../../assets/less.png';
import sass from '../../assets/sass.png';

const Design = () => (
  <section id="design">
    <img className="clearfix" data-src={less} alt="Less" />
    <img data-src={sass} alt="Sass" />
    <h2>Pré-processeurs CSS</h2>
    <p>
      Facilite l'écriture de feuilles de style<br />
      Permet d'utiliser des "fonctions" et des boucles<br />
    </p>
  </section>
);

export default Design;
