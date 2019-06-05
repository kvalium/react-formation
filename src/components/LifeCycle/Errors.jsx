import React from "react";

const Errors = () => (
  <section id="errors">
    <h2>Périmètre d’erreur</h2>
    <p>Composant qui capture les erreurs survenant dans le rendu et le cycle de vie des composants enfants.<br />
    Permet d'afficher une UI de fallback en cas d'erreur.</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    class ErrorBoundary extends Component {
      constructor(props) {
        super(props);
        this.state = {
          errorMessage: undefined
        };
      }
      
      static getDerivedStateFromError(error) {
        return { errorMessage: error.message }; // mise à jour du state
      }

      componentDidCatch(error, info) {
        console.log(error, info); // logging, notification, etc.
      }

      render() {
        if (this.state.errorMessage) {
          return <h1>Oops! {this.state.errorMessage}</h1>;
        }
        return this.props.children;
      }
    }
    `}</code></pre>
    <a href="https://codesandbox.io/s/error-boundary-ssy40">CodeSandbox</a>
  </section>
);

export default Errors;
