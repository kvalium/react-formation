import React from 'react';
import bower from '../../../assets/bower.png';
import yarn from '../../../assets/yarn.png';

const DepManager = () => (
  <section id="dep-manager">
    <img data-src={bower} alt="Bower" />
    <img data-src={yarn} alt="Yarn" />
    <h2>Bower & Yarn</h2>
    <p>
      Gérer vos dépendances<br />
      Récupération des librairies <strong>JavaScript</strong><br />
      Mises à jour automatiques<br />
      Amélioration des performances du projet
    </p>
  </section>
);

export default DepManager;
