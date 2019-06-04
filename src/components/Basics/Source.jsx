import React from 'react';

const Source = () => (
  <section id="source">
    <h1>Implémentation</h1>
    <p>
      Le point d'entrée de notre application<br />
      On appelle <strong>React</strong> afin de rendre notre composant principal
    </p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from "react";
  import ReactDOM from "react-dom";

  import HelloComponent from "./components/HelloComponent"; // import component

  ReactDOM.render(
    <HelloComponent />,            // component
    document.getElementById("app") // mount point
  );
    `}</code></pre>
  </section>
);

export default Source;
