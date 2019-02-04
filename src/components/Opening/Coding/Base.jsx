import React from 'react';

const Base = () => (
  <section id="base">
    <h2>Variables</h2>
    <p>
      Les types primitifs en <strong>JavaScript</strong> sont :<br />
      <code><span className="orange">boolean</span></code>, <code><span className="blue">number</span></code>, <code><span className="red">string</span></code>, <code><span className="green">undefined</span></code> et <code><span className="pink">null</span></code>
    </p>
    <div className="left">
      <h3>JavaScript</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  var numeric = 1;

  var text = '2';

  var binary = true;

  var example = 'binary = ' + binary;

  alert(binary); // binary = true

  numeric = numeric + parseInt(text);

  console.log(numeric); // 3
      `}</code></pre>
    </div>
    <div className="fragment right">
      <h3>ES6+</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  let numeric = 1;

  const text = "2";

  const binary = true;

  let example = \`binary = \${binary}\`;

  alert(binary); // binary = true;

  numeric += parseInt(text);

  console.log(numeric); // 3
      `}</code></pre>
    </div>
  </section>
);

export default Base;
