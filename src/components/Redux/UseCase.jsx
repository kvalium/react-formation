import React from 'react';

const UseCase = () => (
  <section id="use-case">
    <h2>Utilisation</h2>
    <p>
      <strong>React Redux</strong> permet de se connecter au <strong>store</strong> dans un composant<br />
      Cette connexion est indispensable pour pouvoir dispatcher des <em>actions</em>
    </p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { connect } from 'react-redux';
  import { addToCart } from './actions';
  
  export function Pizzas() { 
    
    const { pizzas, addPizzaToCart } = this.props;

    return(
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            <h1>{pizza.name}</h1>
            <button onClick={() => addPizzaToCart(pizza.id)}>Ajouter au Panier</button>
          </li>
        ))}
      </ul>
    );
  }

  const mapStateToProps = state => ({
    pizzas: state.pizzas.pizzaList // retrieve pizza list from the store, map it to 'pizzas' prop
  });
  
  const mapDispatchToProps = dispatch => ({
    addPizzaToCart: id => dispatch(addToCart(id)) // dispatch shortcut mapping
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
    `}</code></pre>
  </section>
);

export default UseCase;
