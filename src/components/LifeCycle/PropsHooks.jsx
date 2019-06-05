import React from 'react';
import props from '../../assets/props.png';

const PropsHooks = () => (
  <section id="props-hooks">
    <h2>Props</h2>
    <p>Ces méthodes sont appelées même s'il n'y a pas de changement des <code>props</code></p>
    <img data-src={props} alt="Props" />
  </section>
);

export default PropsHooks;
