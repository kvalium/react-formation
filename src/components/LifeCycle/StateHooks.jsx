import React from 'react';
import state from '../../assets/state.png';

const StateHooks = () => (
  <section id="state-hooks">
    <h2>State</h2>
    <p>Ces méthodes sont appelées par <code>this.setState()</code></p>
    <img data-src={state} alt="State" />
  </section>
);

export default StateHooks;
