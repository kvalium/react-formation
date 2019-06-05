import React from 'react';

const Hooks = () => (
  <section id="hooks">
    <h2>Explication</h2>
    <p>
      Gérer le comportement de votre composant lorsqu'il est monté, mis à jour, démonté...<br />
      Les méthodes suivantes permettent de gérer le cycle de vie d'un composant <strong>React</strong> :
    </p>
    <ul>
      <li><code>componentWillMount()</code></li>
      <li><code>componentDidMount()</code></li>
      <li><code>componentWillReceiveProps(nextProps)</code></li>
      <li><code>shouldComponentUpdate(nextProps, nextState)</code></li>
      <li><code>componentWillUpdate(nextProps, nextState)</code></li>
      <li><code>componentDidUpdate(prevProps, prevState)</code></li>
      <li><code>componentWillUnmount()</code></li>
    </ul>
  </section>
);

export default Hooks;
