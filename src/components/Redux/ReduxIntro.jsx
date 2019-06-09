import React from 'react';

const ReduxIntro = () => (
  <section id="why-this">
    <h1>Redux</h1>
    <br />
    <h3>La source unique de vérité</h3>
    <p>
      L'état de toute l'application (son <i>state</i>) est stockée dans un objet unique (le <i>store</i>).
    </p>
    <br />
    <h3>L'état est en lecture seule</h3>
    <p>
      Le seul moyen de modifier l'état est d'emettre une <i>action</i>, un objet décrivant ce qui se passe.
    </p>
    <br />
    <h3>Les modifications sont faites par des fonction pures</h3>
    <p>
      Pour décrire comment l'état est transformé par les actions, on écrit des <i>reducers</i> purs.
    </p>
  </section>
);

export default ReduxIntro;
