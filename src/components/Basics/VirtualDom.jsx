import React from 'react';
import virtualDom from '../../assets/virtualdom.png';

const VirtualDom = () => (
  <section id="virtual-dom">
    <h1>DOM Virtuel</h1>
    <p>Le <strong>Virtual DOM</strong>, la vraie révolution portée par <strong>React</strong> qui rend <strong>jQuery</strong> obsolète</p>
    <div>
      <img data-src={virtualDom} alt="VirtualDOM" />
    </div>
  </section>
);

export default VirtualDom;
