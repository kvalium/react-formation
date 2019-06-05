import React from "react";

const Stateless = () => (
  <section id="stateless">
    <h2><i>stateless</i> vs. <i>stateful</i></h2>
    <p>Un composant qui ne gère pas de state est appelé <b><i>stateless</i></b><br />
    Sa syntaxe peut être simplifiée :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  export default class PizzaItem extends Component {
    render() {
      return(
        <div>
          <h2>{this.props.name}</h2>
          <span className="price">{this.props.price}</span>
        </div>
      );
    }
  };
      `}</code></pre>
          <pre><code className="hljs" data-trim contentEditable>{`
  function PizzaItem({name, price}) {
    return(
        <div>
          <h2>{name}</h2>
          <span className="price">{price}</span>
        </div>
      );
  };

  export defaut PizzaItem;
      `}</code></pre>
      <a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/stateless-qoejh">CodeSandbox</a>
  </section>
);

export default Stateless;
