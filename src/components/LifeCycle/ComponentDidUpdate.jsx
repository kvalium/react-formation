import React from "react";

const ComponentDidUpdate = () => (
  <section id="component-did-update">
    <h3><code>componentDidUpdate(prevProps, prevState, snapshot)</code></h3>
    <h4>mise à jour</h4>
    <br />
    <p>appelée immédiatement après que la mise à jour a eu lieu.<br />
    Cette méthode n’est pas appelée pour le rendu initial.<br />
    Permet de travailler sur le DOM une fois que le composant a été mis à jour. </p>
    <br />
    <p>Attention à l'utilisation du <code>setState</code> !</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    componentDidUpdate(prevProps, prevState) {
      // Utilisation classique (pensez bien à comparer les props) :
      if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID); // fetchData : appel Ajax + mise à jour du state
      }
    }
    `}</code></pre>
    <a href="https://codesandbox.io/s/component-lyfecycle-dw31v">CodeSandbox</a>
  </section>
);

export default ComponentDidUpdate;
