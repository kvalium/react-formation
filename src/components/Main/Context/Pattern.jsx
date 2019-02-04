import React from 'react';

const Pattern = () => (
  <section id="pattern">
    <h2>Exemple</h2>
    <p>Ajout du <code>label</code> dans le <strong>context</strong></p>
    <pre><code className="hljs" data-trim contentEditable>{`
  class ParentComponent extends Component {
    static childContextTypes = {
      label: PropTypes.string
    };

    getChildContext() {
      return {
        label: "Hello World"
      };
    }
    
    /* ... */
  }
    `}</code></pre>
    <div className="fragment">
      <p>Récupération du <code>label</code> dans le <strong>context</strong></p>
      <pre><code className="hljs" data-trim contentEditable>{`
  class NestedComponent extends Component {
    static contextTypes = {
      label: PropTypes.string
    };

    render() {
      return(
        <span>{this.context.label}</span>
      );
    }
  }
      `}</code></pre>
    </div>
  </section>
);

export default Pattern;
