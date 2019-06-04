import React from 'react';
import babel from '../../assets/babel.svg';

const Transpiler = () => (
  <section id="transpiler">
    <img data-src={babel} alt="Babel" />
    <h2>Transpileur</h2>
    <p>
      Transforme le code ES5+ en JS interprétables par les navigateurs actuels et <strong>anciens</strong><small>coucou IE</small><br />
      Permet d'utiliser dès maintenant les dernières fonctionnalités du langage<br />
      S'intégre facilement sur les projets
    </p>
  </section>
);

export default Transpiler;
