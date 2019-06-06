import React from 'react';

const Routing = () => (
  <section id="routing">
    <h2>Routes</h2>
    <p>
      Définition des chemins pour chaques composants de l'application<br />
      Le <code>{`<Switch>`}</code> parcourt toutes les routes et s'arrête à la première qui matche.
    </p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { Switch, Route } from 'react-router-dom';
  import { Hello, Login, Contact, NotFound } from './components';

  export default function Router(){
    return (
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/login" component={Login} />
        <Route path="/contact/:name" component={Contact} /> // passage de param
        <Route component={NotFound} /> // Route par défaut si aucune n'a matchée
      </Switch>
    );
  }
    `}</code></pre>
  </section>
);

export default Routing;
