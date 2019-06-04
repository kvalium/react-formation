import React from 'react';

const Imbrication = () => (
  <section id="imbrication-components">
    <h1>Imbrication</h1>
    <p>Un composant React peut en contenir d'autres !</p>

    <pre><code className="hljs" data-trim contentEditable>{`
  import React, { Component } from "react";
  import PizzaItem from "./components/PizzaItem";
  import ContactBlock from "./components/ContactBlock";

  class PizzaList extends Component {
    render() {
      return(
        <div>
          <h2>Nos délicieuses pizzas :</h2>
          <PizzaItem />
          <ContactBlock />
        </div>
      );
    }
  }
    `}</code></pre>
  </section>
);

export default Imbrication;
