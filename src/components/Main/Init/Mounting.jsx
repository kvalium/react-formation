import React from 'react';

const Mounting = () => (
  <section id="mounting">
    <h1>Initialisation</h1>
    <ul>
      <li><span className="grey"><strike>1<small>er</small> Étape : Écrire son composant</strike></span></li>
      <li>2<small>ème</small> Étape : Monter son composant dans le DOM</li>
    </ul>
    <div className="fragment">
      <h3>HTML</h3>
      <pre><code className="hljs" data-trim contentEditable>{`
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>

      <!-- This Is Where We'll Mount Our App -->
      <div id="app"></div>
    </body>
  </html>
      `}</code></pre>
    </div>
  </section>
);

export default Mounting;
