import React from 'react';

const Pure = () => (
  <section id="pure">
    <h1>Pure Components</h1>
    <p>Composants qui sont (re)rendus uniquement si leurs <code>props</code> ou <code>state</code> changent</p>
    <ol className="fragment">
      <li className="fragment shrink">Implémenter <code>shouldComponentUpdate</code> dans chaque composant</li>
      <li>Étendre son composant de <strong>React.PureComponent</strong></li>
    </ol>
    <div className="fragment">
      <pre><code className="hljs" data-trim contentEditable>{`
  import React, { PureComponent } from "react";

  class HelloComponent extends PureComponent {
    /*
    shouldComponentUpdate(nextProps, nextState) {
      return nextProps !== this.props || nextState !== this.state;
    } 
    */
  
    render() {
      // U're Awesome Code...
    }
  }
      `}</code></pre>
    </div>
  </section>
);

export default Pure;
