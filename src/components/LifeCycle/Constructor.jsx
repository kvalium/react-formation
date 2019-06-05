import React from "react";

export default function Constructor(){
  return (
    <section id="constructor">
      <h2><code>constructor(props)</code></h2>
      <h4>montage</h4>
      <br />
      <p>Initialisation du <i>state</i><br />
      Liaison des méthodes de gestion des événements (bind)<br />
      Le seul endroit où l'on manipule directement <code>this.state</code> !</p>
      <pre><code className="hljs" data-trim contentEditable>{`
    class MyComponent extends Component {
      constructor(props) {
        // N’appelez pas this.setState() ici !
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
      }
    }
    `}</code></pre>
    <br />
    <p>Une erreur courante :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    constructor(props) {
      super(props);
      this.state = { color: props.color };
    }
    `}</code></pre>
    </section>
  )
}