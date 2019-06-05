import React from 'react';
import vDom from "../../assets/virtualDom.gif";

const VirtualDom = () => (
  <section id="virtual-dom">
    <h1>DOM Virtuel</h1>
    <h4>Une copie simple et locale du DOM</h4>
    <p>Fournit une interface pour manipuler facilement le DOM<br />
    Permet de regrouper toutes les modification à apporter au DOM<br />
    Mises à jour du DOM moins fréquentes et ciblées.
    </p>
    <img style={{height:"auto"}} src={vDom} alt="virtual-dom" />
  </section>
);

export default VirtualDom;
