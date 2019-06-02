import React from 'react';
import webPack from '../../assets/webpack.png';

const Bundler = () => (
  <section id="bundler">
    <img data-src={webPack} alt="WebPack" />
    <h2>Bundler</h2>
    <p>
      Fonctionnement par modules<br />
      Intéropérabilité des fichiers<br />
      Appel <span className="grey"><strike>de fichiers</strike></span> de modules<br />
      Découpage par responsabilité<br />
      Fini les casses têtes liés aux ressources
    </p>
  </section>
);

export default Bundler;
