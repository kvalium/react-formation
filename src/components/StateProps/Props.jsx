import React from 'react';

const Props = () => (
  <section id="props">
    <h2>Props</h2>
    <p>
      Les <b>prop</b>riétés passée en entrée à la <b>création</b> du composant.<br />
      En lecture seule, ne devraient pas être modifiées.
    </p>
    <div className="fragment">
      <h4>Composant Parent</h4>
      <pre><code className="hljs" data-trim contentEditable>{`
  import PizzaItem from './components/PizzaItem';

  class PizzaList extends Component {
    render() {
      return(
        <PizzaItem name="calzone" price={12} />
      );
    }
  }
      `}</code></pre>
    </div>
    <div className="fragment">
      <h4>Composant Enfant</h4>
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
    </div>
  </section>
);

export default Props;
