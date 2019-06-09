import React from 'react';

const ActionCreators = () => (
  <section id="action-creators">
    <h2>Créateurs d'actions</h2>
    <br />
    <p>Des fonctions qui retournent une action</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    const addToCart = (pizzaId, qty) => (
      {
        type: 'ADD_TO_CART',
        pizzaId,
        qty
      }
    );
        `}
      </code></pre>
    <br />
    <p>Dispatch de l'action</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    dispatch(addToCart(pizzaId, qty))
      `}
    </code></pre>
  </section>
)

export default ActionCreators;
