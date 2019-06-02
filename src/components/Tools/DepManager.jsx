import React from 'react';
import yarn from '../../assets/yarn.png';

const DepManager = () => (
  <section id="dep-manager">
    <img data-src={yarn} alt="Yarn" />
    <h2>Yarn</h2>
    <p>
      
      Une alternative à NPM créée par Facebook pour combler les lacunes de NPM<br />
      NPM a rattrapé son retard, mais certains trouvent Yarn plus rapide.
    </p>
  </section>
);

export default DepManager;
