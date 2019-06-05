import React from "react";

export default function Constructor(){
  return (
    <section id="constructor">
      <h2><code>constructor()</code></h2>
      <br />
      <p>Initialisation du <i>state</i><br />
      Liaison des méthodes de gestion des événements</p>
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
    <p>Le seul endroit où l'on manipule directement <code>this.state</code> !</p>
    </section>
  )
}