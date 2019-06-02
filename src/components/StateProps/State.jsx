import React from 'react';

const State = () => (
  <section id="state">
    <h2>State</h2>
    <p>
      L'état est mutable<br />
      Données internes d'un composant<br />
      Entièrement géré par le composant lui-même
    </p>
    <div className="fragment">
      <pre><code className="hljs" data-trim contentEditable>{`
  class HelloComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        counter: 0
      };
  
      setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000);
    }
  
    render() {
      return(
        <span>{this.state.counter}</span>
      );
    }
  }
      `}</code></pre>
    </div>
  </section>
);

export default State;
