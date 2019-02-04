import React from 'react';

const Typing = () => (
  <section id="typing">
    <h2>Typage</h2>
    <p><code>propTypes</code> permet de définir le type des valeurs relative aux propriétés</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import PropTypes from "prop-types";

  class HelloComponent extends Component {
    render() {
      return(
        <span>{this.props.counter}</span>
        <button onClick={this.props.incrementCounter}></button>
      );
    }
  }
  
  HelloComponent.propTypes = {
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func
  };
    `}</code></pre>
  </section>
);

export default Typing;
