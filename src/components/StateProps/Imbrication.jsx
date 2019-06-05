import React from 'react';

const Imbrication = () => (
  <section id="imbrication">
    <h2>Délégation de contenu</h2>
    <p>Certains parents ne connaissent pas leurs enfants à l'avance.<br />
    Utile pour des blocs génériques : <code>Sidebar</code>, <code>Dialog</code>, etc.</p>
    <div className="fragment">
      <h4>Composant Parent</h4>
      <pre><code className="hljs" data-trim contentEditable>{`
  function TopBar(props) {
    return (
      <div className={'topbar topbar-' + props.color}>
        {props.children}
      </div>
    );
  }
      `}</code></pre>
    </div>
    <div className="fragment">
      <h4>Utilisation</h4>
      <pre><code className="hljs" data-trim contentEditable>{`
  function PizzeriaTopBar(){
    return (
      <TopBar>
        <div className="left">
          <img src="logo.png" />
        </div>
        <div className="right">
          <ul>
            <li>Carte</li>
          </ul>
        </div>
      </TopBar>
    ); 
  }
      `}</code></pre>
    </div>
  </section>
);

export default Imbrication;
