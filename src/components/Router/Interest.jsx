import React from 'react';

const Interest = () => (
  <section id="presentation-router">
    <h2>React Router</h2>
    <p>
      Créer des routes qui lient une URL à un composant.
    </p>
    <br />
    <h4><code>{`<BrowserRouter>`}</code></h4>
    <p>Un Router basé sur l'API HTML5 history pour synchroniser l'UI à l'URL.</p>
    <br />
    <h4><code>{`<Route path="/news" component={NewsFeed} />`}</code></h4>
    <p>Lie une route à un composant.</p>
    <br />
    <h4><code>{`<Link to="/news">     <NavLink to="/news">`}</code></h4>
    <p>Créé un lien associé à une Route.<br />
    <small>NavLink permet de contrôler le style du lien en fonction de la route.</small></p>
    <br />
    <a href="https://reacttraining.com/react-router/web/guides/quick-start">Documentation</a> - <a href="https://codesandbox.io/s/router-fwm9l">CodeSandbox</a>
  </section>
);

export default Interest;
