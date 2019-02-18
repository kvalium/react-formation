import React from 'react';

const Example = () => (
  <section id="example">
    <h1>Imbrication</h1>
    <p><code>this.props.children</code> permet d'accéder aux élements imbriqués</p>
    <div className="fragment">
      <h3>Composant Parent</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  import { ChildComponent } from './ChildComponent';

  class ParentComponent extends Component {
    render() {
      return(
        <ChildComponent>
          <div>World</div>
        </ChildComponent>
      );
    }
  }
      `}</code></pre>
    </div>
    <div className="fragment">
      <h3>Composant Enfant</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  export const ChildComponent = ({ children }) => (
    <div>
      <div>Hello</div>
      {children}
    </div>
  );
      `}</code></pre>
    </div>
  </section>
);

export default Example;
