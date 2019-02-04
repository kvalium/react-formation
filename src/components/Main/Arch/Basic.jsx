import React from 'react';

const Basic = () => (
  <section id="basic">
    <h3>Basique</h3>
    <ul>
      <li><strong>public/</strong></li>
      <ul className="files">
        <li>favicon.png</li>
        <li>index.html</li>
      </ul>
      <li><strong>src/</strong></li>
      <ul className="files">
        <li>App.jsx</li>
        <li>ChildComponent.jsx</li>
        <li>index.js</li>
        <li>ParentComponent.jsx</li>
        <li>registerServiceWorker.js</li>
        <li>styles.css</li>
      </ul>
    </ul>
  </section>
);

export default Basic;
