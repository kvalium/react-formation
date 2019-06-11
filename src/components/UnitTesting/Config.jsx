import React from 'react';

const Config = () => (
  <section id="config">
    <h2>Installation et configuration</h2>
    <br />
    <p>Installation des dépendances :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  npm install --save enzyme enzyme-adapter-react-16 jest babel-jest
    `}</code></pre>

    <div>
      <br />
      <p>Initialisation du fichier <code>setupTests.js</code> :</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  import { configure } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  configure({ adapter: new Adapter() });
      `}</code></pre>
    </div>
  </section>
);

export default Config;
