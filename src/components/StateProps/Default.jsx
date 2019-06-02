import React from 'react';

const Default = () => (
  <section id="default">
    <h2>Valeurs Par Défaut</h2>
    <p><code>defaultProps</code> permet de définir les valeurs par défaut des propriétés</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  class HelloComponent extends Component {
    render() {
      return(
        <span>{this.props.counter}</span>
      );
    }
  }
  
  HelloComponent.defaultProps = {
    counter: 0
  };
    `}</code></pre>
  </section>
);

export default Default;
