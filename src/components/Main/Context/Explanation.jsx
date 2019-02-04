import React from 'react';

const Explanation = () => (
  <section id="explanation">
    <h2>Explication</h2>
    <p>
      Passer des <code>props</code> entre des composants à plusieurs niveaux peut paraître compliqué<br />
      <strong>React Context</strong> permet d'enregistrer une donnée dans <code>this.context</code>
    </p>
    <div className="fragment">
      <ul>
        <li><code>constructor(props, context)</code></li>
        <li><code>componentWillReceiveProps(nextProps, nextContext)</code></li>
        <li><code>shouldComponentUpdate(nextProps, nextState, nextContext)</code></li>
        <li><code>componentWillUpdate(nextProps, nextState, nextContext)</code></li>
        <li><code>componentDidUpdate(prevProps, prevState, prevContext)</code></li>
      </ul>
    </div>
  </section>
);

export default Explanation;
