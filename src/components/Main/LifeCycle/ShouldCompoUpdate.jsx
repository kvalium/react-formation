import React from 'react';

const ShouldCompoUpdate = () => (
  <section>
    <h2>Exemple</h2>
    <pre><code className="hljs" data-trim contentEditable>{`
  class HelloComponent extends Component {
    componentDidMount() {
      console.log(this.props.label);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.label !== this.props.label;
      // Return True By Default
    }
  
    render() {
      return(
        <span>{this.props.label}</span>
      );
    }
  }
    `}</code></pre>

    <div className="fragment">
      <br />
      <span className="lue-grey"><em>Ceci permet de ne pas (re)rendre le composant lorsque les </em><code>props</code><em> ne changent pas</em></span>
    </div>
  </section>
);

export default ShouldCompoUpdate;
