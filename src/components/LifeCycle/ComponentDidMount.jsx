import React from "react";

const ComponentDidMount = () => (
  <section id="component-did-mount">
    <h2><code>componentDidMount()</code></h2>
    <h4>montage</h4>
    <br />
    <p>appelée immédiatement après que le composant est monté (inséré dans le DOM)<br />
    Le bon endroit pour faire des appels AJAX et charger les données dans le composant.<br />
    Utile également pour la déclaration d'un eventListener.</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    class MyClass extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: "Chargement..."
        };
      }

      componentDidMount() {
        // appel API, etc. puis mise à jour du state
        this.setState({ data: /* réponse de l'API */ });
      }

      render() {
        return <div>{this.state.data}</div>;
      }
    }
    `}</code></pre>
  </section>
);

export default ComponentDidMount;
