import React from 'react';

const Complex = () => (
  <section id="complex">
    <div className="left">
      <h3>Technique</h3>
      <ul className="medium">
        <li><strong>actions/</strong></li>
        <ul className="files">
          <li>index.js</li>
        </ul>
        <li><strong>components/</strong></li>
        <ul className="files">
          <li>App.jsx</li>
          <li>Body.jsx</li>
          <li>ChildComponent.jsx</li>
          <li>Footer.jsx</li>
          <li>Header.jsx</li>
          <li>ParentComponent.jsx</li>
        </ul>
        <li><strong>constants/</strong></li>
        <ul className="files">
          <li>index.js</li>
        </ul>
        <li><strong>reducers/</strong></li>
        <ul className="files">
          <li>index.js</li>
          <li>parent.js</li>
          <li>child.js</li>
        </ul>
        <li><strong>services/</strong></li>
        <ul className="files">
          <li>api.js</li>
          <li>legacy.js</li>
        </ul>
        <li className="files">index.js</li>
        <li className="files">registerServiceWorker.js</li>
        <li className="files">styles.css</li>
      </ul>
    </div>
    <div className="fragment right">
      <h3>Fonctionnelle</h3>
      <ul className="small">
        <li><strong>components/</strong></li>
        <ul className="files">
          <li>App.jsx</li>
          <li className="directory"><strong>Body</strong></li>
          <ul className="files">
            <li>Body.jsx</li>
            <li>ChildComponent.jsx</li>
            <li>ParentComponent.jsx</li>
          </ul>
          <li>Footer.jsx</li>
          <li>Header.jsx</li>
        </ul>
        <li><strong>redux/</strong></li>
        <ul className="files">
          <li>store.js</li>
          <li className="directory"><strong>child/</strong></li>
          <ul className="files">
            <li>actions.js</li>
            <li>constants.js</li>
            <li>reducer.js</li>
          </ul>
          <li className="directory"><strong>parent/</strong></li>
          <ul className="files">
            <li>actions.js</li>
            <li>constants.js</li>
            <li>reducer.js</li>
          </ul>
        </ul>
        <li><strong>services/</strong></li>
        <ul className="files">
          <li>api.js</li>
          <li>legacy.js</li>
        </ul>
        <li className="files">index.js</li>
        <li className="files">registerServiceWorker.js</li>
        <li className="files">styles.css</li>
      </ul>
    </div>
  </section>
);

export default Complex;
