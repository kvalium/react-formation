import React from 'react';

const FullComponentProblem = () => (
  <section id="full-component-problem">
    <h2>Conteneurs et composants de présentation</h2>
    <p>Découper un composant en deux pour isoler la logique du visuel.</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  class Pizzas extends React.Component {
    constructor(props) {
      super(props);
      this.state = { pizzas: [] };
    }

    getPizzas = () => {
      return [
        { name: "Royale", price: 12 }, { name: "Reine", price: 10 },
      ];
    };

    componentDidMount() {
      this.setState({ pizzas: this.getPizzas() });
    }

    render() {
      return (
        <ul>
          {this.state.pizzas.map(e => (
            <li>{e.name}: {e.price}</li>
          ))}
        </ul>
      );
    }
  }
      `}</code></pre>
    <a href="https://codesandbox.io/s/full-component-problem-5fyzg">CodeSandbox</a>
  </section>
);

export default FullComponentProblem;
