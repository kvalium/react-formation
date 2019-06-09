import React from 'react';

const Actions = () => (
  <section id="actions">
    <h2>Actions</h2>
    <p>
      Les actions sont des paquets d'information qui envoient des données de l'application au store.
    </p>
    <br />
    <p>Appel d'une action depuis l'application</p>
    <div style={{display: "inline-block", width: "30%", margin: "0 auto" }} >
      <pre><code className="hljs" data-trim contentEditable>{`
    store.dispatch(action)
        `}</code></pre>
    </div>

    <p>Une action contient (toujours) un type et des données (si besoin).</p>
    <div style={{display: "inline-block", width: "50%" }} >
      <pre><code className="hljs" data-trim contentEditable>{`
    {
      type: 'ADD_TO_CART',
      pizzaId: 'calzone',
      qty: 2
    }
        `}
      </code></pre>
    </div>
    <div style={{display: "inline-block", width: "50%" }} >
      <pre><code className="hljs" data-trim contentEditable>{`
    {
      type: 'FLUSH_CART'
    }


            `}
      </code></pre>
    </div>
  </section>
);

export default Actions;
