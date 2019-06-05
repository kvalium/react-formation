import React from "react";

const ComponentWillUnmount = () => (
  <section id="component_will_unmount">
    <h2><code>componentWillUnmount()</code></h2>
    <h4>démontage</h4>
    <br />
    <p>Votre composant est détruit, peut-être pour toujours, c'est triste...<br /><br />
    Avant de partir, il vous demande si vous avez une dernière chose à lui dire.<br />
    Utile pour annuler un appel Ajax, stopper un minuteur, enlever un eventListener, etc.<br /><br />
    L'endroit idéal pour faire un peu de nettoyage !</p>
  </section>
);

export default ComponentWillUnmount;
