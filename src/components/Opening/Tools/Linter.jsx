import React from 'react';
import esLint from '../../../assets/eslint.png';

const Linter = () => (
  <section id="linter">
    <img data-src={esLint} alt="ESLint" />
    <h2>ESLint</h2>
    <p>
      <span className="clearfix">Optimisation de <code><span className="deep-purple">code</span></code></span><br />
      Analyse statique du <code><span className="deep-purple">code</span></code> source<br />
      Contrôle l'écriture du <code><span className="deep-purple">code</span></code> <strong>JavaScript</strong><br />
      Basé sur la convention de <code><span className="deep-purple">code</span></code> d'EcmaScript
    </p>
  </section>
);

export default Linter;
