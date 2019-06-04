import React from 'react';

const Jsx = () => (
  <section id="jsx">
    <h1>JSX</h1>
    <p>Préférez la syntaxe JSX, exemple avec le fichier <code>HelloComponent.jsx</code> :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React, { Component } from "react";

  class HelloComponent extends Component {
    render() {
      return(
        <h1>Hello World!</h1>
      );
    }
  }
    `}</code></pre>

    <div>
      <em>Le langage JSX nécessite d'être transpilé</em>
    </div>
  </section>
);

export default Jsx;
