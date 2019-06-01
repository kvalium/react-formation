import React from 'react';

const Source = () => (
  <section id="source">
    <h2>Index.js</h2>
    <p>
      Au début de l'application, dans le script principal...<br />
      On appelle <strong>React</strong> afin de rendre le composant dans le DOM !
    </p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  import HelloComponent from './path/to/HelloComponent';

  ReactDOM.render(
    <HelloComponent />,
    document.getElementById('app') // Our Mount Point
  );
    `}</code></pre>
  </section>
);

export default Source;
