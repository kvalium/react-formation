import React from 'react';
import meteor from '../../../assets/meteor.png';

const Meteor = () => (
  <section id="meteor">
    <img data-src={meteor} alt="Meteor" />
    <h2>Meteor</h2>
    <p>
      Développé depuis 2012 par <strong>Meteor Dev Group</strong><br />
      Librairie <strong>JavaScript</strong> orientée <em>Full-Stack</em><br />
      Idéal pour les applications petites et réactives<br />
      Intégration native de <strong>Apache Cordova</strong><br />
      Rendu des données directement dans le navigateur<br />
      Communauté de développeurs constante
    </p>
  </section>
);

export default Meteor;
