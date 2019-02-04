import React from 'react';

const Routing = () => (
  <section id="routing">
    <h2>Routing</h2>
    <p>
      Définition des chemins pour chaques composants de l'application
    </p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { Switch, Route } from 'react-router-dom';
  import Hello from './Hello';
  import Login from './Login';
  import Contact from './Contact';

  const Router = () => (
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route path="/login" component={Login} />
      <Route path="/contact/:name" render={({ match }) => <Contact name={match.params.name} />} />
    </Switch>
  );

  export default Router;
    `}</code></pre>
  </section>
);

export default Routing;
