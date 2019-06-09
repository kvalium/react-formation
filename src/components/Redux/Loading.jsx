import React from 'react';

const Loading = () => (
  <section id="loading">
    <h2>Initialisation</h2>
    <p>Déclaration d'un Provider, qui va rendre disponible le store dans l'application.</p>
    <br />
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { render } from 'react-dom';
  import { Provider } from 'react-redux';
  import App from './components/App';
  import store from './redux/store';

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
