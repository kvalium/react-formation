import React from "react";

const ExoticMethods = () => (
  <section id="exotic-methods">
    <h2>Autres méthodes du cycle de vie</h2>
    <br />
    <h4><code>shouldComponentUpdate(nextProps, nextState)</code></h4>
    <p><small>Permet de contrôler si un composant doit être mis à jour si ses props ou state changent.</small></p>
    <br />
    <h4><code>getDerivedStateFromProps(props, state)</code></h4>
    <p><small>Cette méthode existe pour les rares cas où l’état dépend bien des changements de props au fil du temps, lorsque les props ne suffisent pas.</small></p>
    <br />
    <h4><code>getSnapshotBeforeUpdate(prevProps, prevState)</code></h4>
    <p><small>Permet de capturer des infos du DOM courant (ex. la position de défilement) avant qu’il ne subisse d’éventuelles modifications.<br />
    Cas d'usage : dans un chatbot, on souhaite faire un scroll bas de page lors de l'ajout d'un message.</small></p>

    <br />
    <h4>Méthodes dépréciées : <code>UNSAFE_*</code></h4>
  </section>
);

export default ExoticMethods;
