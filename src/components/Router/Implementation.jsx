import React from 'react';

const Implementation = () => (
  <section id="implementation">
    <h2>Mise en place</h2>

    <div>
      <p>Activation du Router dans le point d'entrée de l'application</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { render } from 'react-dom';
  import { BrowserRouter } from 'react-router-dom';
  import App from './App';

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
      `}</code></pre>
    </div>
    <div className="fragment">
      <p>Appel du composant déclarant les routes</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  import React, { Fragment } from 'react';
  import NavBar from './NavBar';
  import Router from './Router';

  const App = () => (
    <Fragment>
      <NavBar />
      <Router />
    </Fragment>
  );

  export default App;
    `}</code></pre>
    </div>
  </section>
);

export default Implementation;
