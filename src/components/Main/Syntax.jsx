import React from 'react';

const Syntax = () => (
  <section id="syntax">
    <h1>Syntaxe</h1>
    <p>Ci-dessous un exemple de composant <strong>React</strong> avec le fichier <code>HelloComponent.js</code> :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from "react";

  class HelloComponent extends React.Component {
    render() {
      return React.createElement(
        "span",
        null,
        "Hello World !"
      );
    }
  }
      `}</code></pre>
  </section>
);

export default Syntax;
