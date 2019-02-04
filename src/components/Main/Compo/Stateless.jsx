import React from 'react';

const Stateless = () => (
  <section id="stateless">
    <h1>Syntaxe Stateless</h1>
    <p>Les composants n'incluant que la fonction <code>render()</code> peuvent s'écrirent autrement</p>
    <div className="fragment">
      <pre><code className="hljs" data-trim contentEditable>{`
  import { number, func, arrayOf, string } from "prop-types";

  const styleSheet = {
    marginTop: '20px',
    paddingLeft: '10px'
  };

  // Component
  const HelloComponent = ({ counter, incrementCounter }) => (
    <div className="stateless">
      <span>{counter}</span>
      <button style={styleSheet} onClick={incrementCounter}></button>
    </div>
  );
  
  HelloComponent.propTypes = {
    counter: number.isRequired,
    incrementCounter: func,
    anotherStuff: arrayOf(string)
  };

  export default HelloComponent;
      `}</code></pre>
    </div>
  </section>
);

export default Stateless;
