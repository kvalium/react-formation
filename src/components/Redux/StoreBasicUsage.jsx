import React from 'react'

export default function StoreBasicUsage() {
  return (
    <section id="redux-store-basics">
      <h2>Store<br /><small>utilisation "basique"</small></h2>
      <br /><br />
      <pre><code className="hljs" data-trim contentEditable>{`
    import { addPizza } from './actions';

    // Log the initial state
    console.log(store.getState());

    // Dispatch some actions
    store.dispatch(addPizza({name: "Calzone", price: 12}));
    store.dispatch(addPizza({name: "Marina", price: 15}));

    // Stop listening to state updates
    unsubscribe();

`}</code></pre>
    </section>
  )
}
