import React from 'react';

const Implementation = () => (
  <section id="implementation">
    <h2>Intégration</h2>
    <p>Rendu du composant servant de <strong>router</strong> à partir du composant principal</p>
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
    <div className="fragment">
      <p>Activation de la navigation par <strong>routes</strong> dans le point d'entrée de l'application</p>
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
  </section>
);

export default Implementation;
