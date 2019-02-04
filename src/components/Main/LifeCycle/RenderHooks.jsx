import React from 'react';
import render from '../../../assets/render.png';

const RenderHooks = () => (
  <section id="render-hooks">
    <h2>Render</h2>
    <p>Ces méthodes sont appelées lorsque le composant est monté via <code>ReactDOM.render()</code></p>
    <img data-src={render} alt="Render" />
  </section>
);

export default RenderHooks;
