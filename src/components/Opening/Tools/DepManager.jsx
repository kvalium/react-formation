import React from 'react';
import bower from '../../../assets/bower.png';
import yarn from '../../../assets/yarn.png';

const DepManager = () => (
  <section id="dep-manager">
    <img data-src={yarn} alt="Yarn" />
    <h2>Yarn</h2>
    <p>
      Une alternative à NPM (les goûts et les couleurs...)
    </p>
  </section>
);

export default DepManager;
