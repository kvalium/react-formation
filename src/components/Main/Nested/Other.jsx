import React from 'react';

const Other = () => (
  <section id="other">
    <h2>Autre Exemple</h2>
    <pre><code className="hljs" data-trim contentEditable>{`
  class HelloComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        list: [
          { id: 1, label: "Awesome" },
          { id: 2, label: "React" },
          { id: 3, label: "Tutorial" }
        ]
      };
    }
  
    render() {
      return(
        <ul>
          {this.state.list.map(element => (
            <li key={element.id}>{element.label}</li>
          )}
        </ul>
      );
    }
  }
    `}</code></pre>

    <div className="fragment">
      <br />
      <span className="blue-grey"><em>Ne pas oublier d'identifier chaque élément lors d'un rendu dynamique grâce à </em><strong>key</strong></span>
    </div>
  </section>
);

export default Other;
