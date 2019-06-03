import React from 'react';

const Intro = () => (
  <section id="intro">
    <h1>React</h1>
    <p>
      Créé en 2013 par <strong>Facebook</strong><br />
      "Templates" JSX<br />
      Approche par composants isolés et réutilisables<br />
      {/* Idéal pour les projets <em>Front-End</em> volumineux<br /> */}
      {/* Implémentation de l'architecture Flux<br />
      Initialement publié sous licence BSD<br /> */}
      Utilisé par <span className="red">Netflix</span>, <span className="black">Deezer</span>, <span className="green">Spotify</span>, <span className="brown">Instagram</span>, <span className="orange">SoundCloud</span>...
      <br /><br />
      <strong>React Native</strong> pour développer sur mobile
    </p>
  </section>
);

export default Intro;
