import React from 'react';

const Child = () => (
  <section id="child">
    <h2>Modification</h2>
    <pre><code className="hljs" data-trim contentEditable>{`
  export default class ChildComposant extends Component {
    render() {
      return(
        <div>
          <div>{this.props.counter}</div>
  
          <button onClick={this.props.incrementCounter}>
            Increment
          </button>
        </div>
      );
    }
  }
    `}</code></pre>

    <div className="fragment">
      <br />
      <span className="blue-grey"><em>L'événement sur le bouton va modifier la propriété </em><strong>counter</strong><em> en passant par le composant parent</em></span>
    </div>
  </section>
);

export default Child;
