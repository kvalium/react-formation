import React from "react";
import DomNodeTree from '../../assets/virtual-dom.png';

const Dom = () => (
  <section id="dom">
    <h1>DOM</h1>
    <h4>Document Object Model</h4>
    <p>
      API permettant de lire et manipuler le contenu, la structure et le style d'une page Web.<br />
      La représentation du document HTML source sous forme d'une arborescence, le <i>node tree</i>
    </p>
    <div>
      <img data-src={DomNodeTree} style={{width: "auto", height: "auto"}} alt="NodeTree" />
    </div>
  </section>
);

export default Dom;
