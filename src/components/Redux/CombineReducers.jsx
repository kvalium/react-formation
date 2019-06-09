import React from 'react'

export default function CombineReducers() {
  return (
    <section id="reducer-combine">
      <h2>Reducers<br /><small>composition</small></h2>
      <br />
      <p>Un seul store mais plusieurs reducers possibles...</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  
  import PizzaReducer from '../Pizza/PizzaReducer';
  import CartReducer from '../Cart/CartReducer';
  import AccountReducer from '../Account/AccountReducer';
  
  // Composition du reducer unique qui sera passé au store.
  const rootReducer = combineReducers({
    PizzaReducer,
    CartReducer,
    AccountReducer
  });
        `}
      </code></pre>
    </section>
  )
}
