import React from 'react';
import sopraSteria from '../../assets/soprasteria.png';

const WhoAmI = () => (
  <section id="who-am-i">
    <h1>Présentation</h1>
    <h3>Damien Chazoule</h3>
    <p>
      Développeur <em>Full-Stack</em> JS<br />
      Référent <strong>React</strong>
    </p>
    <img data-src={sopraSteria} alt="Sopra Steria" />
  </section>
);

export default WhoAmI;
