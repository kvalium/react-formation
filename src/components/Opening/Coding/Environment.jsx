import React from 'react';
import chrome from '../../../assets/chrome.png';
import edge from '../../../assets/edge.png';
import firefox from '../../../assets/firefox.png';
import opera from '../../../assets/opera.png';
import safari from '../../../assets/safari.png';

const Environment = () => (
  <section id="environment">
    <img data-src={chrome} alt="Chrome" />
    <img data-src={edge} alt="Edge" />
    <img data-src={firefox} alt="Firefox" />
    <img data-src={opera} alt="Opera" />
    <img data-src={safari} alt="Safari" />
    <h2>Environnement</h2>
    <p>
      Préférez le mode <code>strict</code> lors de l'exécution pour la remontée d'erreurs
    </p>
    <pre><code className="hljs" data-trim>{`
  (function() {
    'use strict';

    /* ... */
  })();
    `}</code></pre>
  </section>
);

export default Environment;
