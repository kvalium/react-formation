import React from 'react';

const ContainersPresentation = () => (
  <section id="container-presentation">
    <h2>Conteneurs et composants de présentation</h2>
    <p>Découper un composant en deux pour isoler la logique du visuel.</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  class PizzasContainer extends React.Component { // composant stateful: ne contient que la logique
    constructor(props) {
      super(props);
      this.state = { pizzas: [] };
    }

    getPizzas = () => { ... }

    componentDidMount() {
      this.setState({ pizzas: this.getPizzas() });
    }

    render() {
      return <Pizzas pizzas={this.state.pizzas} />; // appel du composant stateless
    }
  }
      `}</code></pre>

<pre><code className="hljs" data-trim contentEditable>{`
  function Pizzas({pizzas}) { // composant stateless: ne contient que le visuel
    return (
      <ul>
        {pizzas.map(e => (
          <li>{e.name}: {e.price}</li>
        ))}
      </ul>
    );
  }
      `}</code></pre>
    <small><a href="https://codesandbox.io/s/full-component-problem-5fyzg">CodeSandbox</a></small>
  </section>
);

export default ContainersPresentation;
