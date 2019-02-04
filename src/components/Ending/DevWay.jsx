import React from 'react';

const DevWay = () => (
  <section id="dev-way">
    <h1>La Voie Du <strike className="grey">Jedi</strike> Dev</h1>
    <div className="fragment">
      <h2 className="beginner"><span className="red">Débutant</span></h2>
      <div className="circle beginner">Framework</div>
    </div>
    <div className="fragment">
      <h2 className="proficient"><span className="orange">Compétent</span></h2>
      <div className="circle proficient">Langage</div>
    </div>
    <div className="fragment">
      <h2 className="expert"><span className="green">Expert</span></h2>
      <div className="circle expert">Algorithmes<div className="clearfix">Structures De Données</div></div>
    </div>
  </section>
);

export default DevWay;
