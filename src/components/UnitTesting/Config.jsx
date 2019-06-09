import React from 'react';

const Config = () => (
  <section id="config">
    <h2>Configuration</h2>
    <p>Récupération des librairies utilitaires :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  npm install --save enzyme enzyme-adapter-react-16
    `}</code></pre>

    <div className="fragment">
      <p>Initialisation du fichier <code>setupTests.js</code> :</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  import Enzyme from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  Enzyme.configure({ adapter: new Adapter() });
      `}</code></pre>
    </div>
  </section>
);

export default Config;
