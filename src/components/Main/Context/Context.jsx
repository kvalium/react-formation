import React from 'react';
import Explanation from './Explanation';
import Pattern from './Pattern';
import Warning from './Warning';

const Context = () => (
  <section>
    <section id="context">
      <h1>Context</h1>
      <h3><em>Comment passer une propriété à un composant imbriqué ?</em></h3>
    </section>
    <Explanation />
    <Pattern />
    <Warning />
  </section>
);

export default Context;
