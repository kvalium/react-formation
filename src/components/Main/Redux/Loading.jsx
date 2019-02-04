import React from 'react';

const Loading = () => (
  <section id="loading">
    <h2>Initialisation</h2>
    <p>Chargement du <strong>store</strong> dans le point d'entrée de notre application : <code>index.js</code></p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { render } from 'react-dom';
  import { Provider } from 'react-redux';
  import App from './components/App';
  import store from './redux/store';
  import './assets/styles.css';

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
    `}</code></pre>
  </section>
);

export default Loading;
