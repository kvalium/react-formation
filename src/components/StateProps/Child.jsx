import React from 'react';

const Child = () => (
  <section id="child">
    <h2>Modèle Courant 2/2</h2>
    <p>Le <b>state</b> du parent est une <b>propriété</b> de l'enfant.<br />
      Permet de séparer la logique du rendu.</p>
      <h4>Composant Enfant : contient le rendu</h4>

    <pre><code className="hljs" data-trim contentEditable>{`
  export default class ChildComposant extends Component {
    render() {
      return(
        <div>
          <div>{this.props.counter}</div>

          <button onClick={this.props.incrementCounter}>
            Increment
          </button>
        </div>
      );
    }
  }
    `}</code></pre>

    <div className="fragment">
      <br />
      <span className="blue-grey"><em>L'événement sur le bouton va modifier la propriété </em><strong>counter</strong><em> en passant par le composant parent</em></span>
    </div>
  </section>
);

export default Child;
