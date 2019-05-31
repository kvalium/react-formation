import React from 'react';
import jest from '../../../assets/jest.png';
import airbnb from '../../../assets/airbnb.png';

const UnitTest = () => (
  <section>
    <img data-src={jest} alt="Jest" />
    <img data-src={airbnb} alt="AirBnB" />
    <h2>Jest et Enzyme</h2>
    <h3>Tests unitaires</h3>
    <p>
      La base de la programmation<br />
      Tester vos méthodes et vos services<br />
      Gagner du temps dans vos développements
    </p>
    <p><span className="grey"><strike>Tester c'est douter, corriger c'est abdiquer !</strike></span></p>
  </section>
);

export default UnitTest;
