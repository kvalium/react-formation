import React from 'react';
import Explanation from './Explanation';
import Pattern from './Pattern';
import Warning from './Warning';

const Context = () => (
  <section>
    <section id="context" className="dark" data-background-color="#282c34">
      <h1>Context</h1>
      <h4>Comment passer une propriété à un composant imbriqué ?</h4>
    </section>
    <Explanation />
    <Pattern />
    <Warning />
  </section>
);

export default Context;
