import React from 'react'

export default function ReducerExample() {
  return (
    <section id="reducer-example">
      <h2>Reducers<br /><small>exemple</small></h2>

      <pre><code className="hljs" data-trim contentEditable>{`
  // Initial state
  const initialState = {
    cart: [],
    pizzaList: [],
  };

  /**
   * Pizza Reducer
   * @param {object} state current state, defaulted to the initial state
   * @param {object} action reducer action
   */
  const pizzas = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, {action.pizzaId, action.qty} ] };
      case 'SET_PIZZA_LIST':
        return { ...state, pizzaList: action.pizzaList };
      case 'FLUSH_CART':
        return { ...state, cart: initialState.cart };
      default:
        return state;
    }
  };
        `}
      </code></pre>
    </section>
  )
}
