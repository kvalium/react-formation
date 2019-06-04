import React from 'react';

const Parent = () => (
  <section id="parent">
    <h2>Modèle Courant</h2>
    <p>Le <b>state</b> du parent est une <b>propriété</b> de l'enfant.</p>
    <div>
      <h3>Déclaration</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  import ChildComponent from './ChildComponent';

  class ParentComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0
      };

      this.incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
      };
    }

    render() {
      return(
        <ChildComponent
          counter={this.state.counter}
          incrementCounter={this.incrementCounter} />
      );
    }
  }
      `}</code></pre>
    </div>
  </section>
);

export default Parent;
