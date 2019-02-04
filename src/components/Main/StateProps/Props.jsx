import React from 'react';

const Props = () => (
  <section id="props">
    <h2>Props</h2>
    <p>
      Les propriétés sont immutables<br />
      N'importe quelle valeur <small>(listes, objets, fonctions, nombres... )</small><br />
      Données transmises d'un composant parent à un enfant<br />
      Passer des propriétés comme des attributs d'un élement HTML
    </p>
    <div className="fragment">
      <h3>Composant Enfant</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  export default class ChildComponent extends Component {
    render() {
      return(
        <span>{this.props.counter}</span>
      );
    }
  }
      `}</code></pre>
    </div>
    <div className="fragment">
      <h3>Composant Parent</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  import ChildComponent from './ChildComponent';

  class ParentComponent extends Component {
    render() {
      return(
        <ChildComponent counter={1} />
      );
    }
  }
      `}</code></pre>
    </div>
  </section>
);

export default Props;
