import React from 'react';

const Reducers = () => (
  <section id="reducers">
    <h2>Reducers</h2>
    <br />
    <br />
    <p>
      Les reducers indiquent <u>comment le state doit changer</u> en réponse à une action envoyée au store.
    </p>
    <br />
    <pre style={{fontSize: '1em', display: 'inline-block', margin: '0 auto', width: '70%'}}><code  className="hljs" data-trim contentEditable>{`
  ;(previousState, action) => newState	
    `}</code></pre>
  </section>
);

export default Reducers;
