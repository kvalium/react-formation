import React from 'react';
import git from '../../assets/git.png';

const VersionManager = () => (
  <section id="version-manager">
    <img data-src={git} alt="Git" />
    <h2>Git</h2>
    <p>
      L'indispensable gestionnaire de versions<br />
      Meilleure visualisation de l'avancement du projet<br />
      Utilisation des branches et des <i>merge requests</i><br />
      Travail collaboratif décentralisé
    </p>
  </section>
);

export default VersionManager;
