import React from 'react';
import babel from '../../../assets/babel.png';

const Transpiler = () => (
  <section id="transpiler">
    <img data-src={babel} alt="Babel" />
    <h2>Transpileur</h2>
    <p>
      Fusion des projets <strong>6To5</strong> et <strong>ESNext</strong><br />
      Rétrocompatibilité du code <strong>JavaScript</strong><br />
      Support des nouveautés ES9 et certaines fonctionnalités ESNext à venir<br />
      S'intégre facilement avec les <em>Task Runner</em> et les <em>Bundler</em>
    </p>
  </section>
);

export default Transpiler;
