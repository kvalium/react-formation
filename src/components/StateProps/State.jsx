import React from 'react';

const State = () => (
  <section id="state">
    <h2>State</h2>
    <p>
      Données internes d'un composant<br />
      Définies et manipulées directement par le composant
    </p>
    <div>
      <pre><code className="hljs" data-trim contentEditable>{`
  class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }

    onCounterUpdate() {
      this.setState({
        counter: this.state.counter + 1
      });
    }

    render() {
      return (
        <div>
          <p>{this.state.counter}</p>
          <button onClick={() => this.onCounterUpdate()}>Add 1</button>
        </div>
      );
    }
  }
      `}</code></pre>
    </div>
    <a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/state-counter-repj6">CodeSandbox</a>
  </section>
);

export default State;
