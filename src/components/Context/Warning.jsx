import React from 'react';
import context from '../../assets/context.png';

const Warning = () => (
  <section id="warning">
    <h2>Attention</h2>
    <img data-src={context} alt="Context" />
    <div className="warning">
      <div className="fragment left">
        <div className="add">
          <p>Ajout du <code>label</code> dans le <strong>context</strong></p>
        </div>
        <div className="retrieve">
          <p>Récupération du <code>label</code> dans le <strong>context</strong></p>
        </div>
      </div>
      <div className="fragment right">
        <div className="update">
          <p>Mise à jour du <strong>context</strong></p>
        </div>
        <div className="pure">
          <p><code>shouldComponentUpdate()</code> => <em>false</em></p>
        </div>
        <div className="fail">
          <p><strike><strong>context</strong></strike> non mis à jour</p>
        </div>
      </div>
    </div>
  </section>
);

export default Warning;
