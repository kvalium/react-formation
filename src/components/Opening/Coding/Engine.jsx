import React from 'react';

const Engine = () => (
  <section id="engine">
    <h2>Interprétation</h2>
    <p>
      Quel est le résultat de cette fonction <strong>JavaScript</strong> :<br />
      <code><span className="orange">1</span></code>, <code><span className="blue">10</span></code>, <code><span className="red">undefined</span></code> ou <code><span className="green">ReferenceError</span></code> ?
    </p>
    <div className="left">
      <h3>Pré-Compilation</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  var foo = 1;
  
  function bar() {
    if (!foo) {
      var foo = 10;
    }

    console.log(foo);
  }
    
  bar();
      `}</code></pre>
    </div>
    <div className="fragment right">
      <h3>Post-Compilation</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  var foo = 1;

  function bar() {
    var foo;

    if (!foo) {
      foo = 10;
    }

    console.log(foo);
  }

  bar(); // 10
      `}</code></pre>
    </div>
  </section>
);

export default Engine;
