import React from 'react';

const Store = () => (
  <section id="store">
    <h2>Store</h2>
    <br />
    <ul>
      <li>Stocke le state de l'application</li>
      <li>Autorise l'accès au state : <code>getState();</code></li>
      <li>Autorise la modification du state : <code>dispatch(action);</code></li>
      <li>Inscrit des listeners : <code>subscribe(listener);</code></li>
    </ul>
    <br />
    <br />
    <pre><code className="hljs" data-trim contentEditable>{`
    import { createStore } from 'redux';
    import rootReducer from './reducers';
    const store = createStore(rootReducer, /* preloadedState, Composers & Enhancers */);
    `}</code></pre>
  </section>
);

export default Store;
