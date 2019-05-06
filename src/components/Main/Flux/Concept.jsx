import React from 'react';
import oneDataFlow from '../../../assets/onedataflow.png';

const Concept = () => (
  <section id="concept">
    <h2>Concept</h2>
    <div className="fragment shrink">
      <p>
        Architecture pour les flux de données unidirectionnels<br />
        Il existe plusieurs implémentations de <strong>Flux</strong> en <strong>JavaScript</strong> :
      </p>
      <ul>
        <li>Flux</li>
        <li>Fluxxor</li>
        <li>MobX</li>
        <li><strong>Redux</strong></li>
        <li>Reflux</li>
        <li>Relay</li>
        <li>Vuex</li>
        <li className="clearfix">...</li>
      </ul>
    </div>
    <div className="fragment">
      <img data-src={oneDataFlow} alt="One Data Flow" />
    </div>
  </section>
);

export default Concept;
