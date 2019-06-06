import React from "react";

function DomainDriven() {
  return (
    <section id="ddd">
      <h2>Structure <i>Domain-Driven</i></h2>
      <p>Organiser son application en "domaines" isolés.<br />
        Un découpage orienté métier.<br />
        Un prélude à la création de librairies NPM.</p>
      <br />
      <div style={{display: "inline-block", width: "50%" }} >
        <p>découpage par type de fichier</p>
        <pre>{`
    src/
      App.js
      containers/
        CartContainer.js
        LoginContainer.js
        ProductContainer.js
      components/
        Cart.jsx
        Login.jsx
        Product.jsx
        ProductList.jsx

        
      `}</pre>
      </div>
      <div style={{display: "inline-block", width: "50%" }} >
      <p>découpage par domaines fonctionnels</p>
        <pre>{`
    src/
      App/
        App.js
      Cart/
        Cart.jsx
        CartContainer.js
      Login/
        Login.jsx
        LoginContainer.js
      Product/
        Product.jsx
        ProductContainer.js
        ProductList.jsx
        `}</pre>
      </div>
    </section>
  );
}

export default DomainDriven;
