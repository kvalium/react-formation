import React from 'react';
import jest from '../../../assets/jest.png';
import airbnb from '../../../assets/airbnb.png';

const UnitTest = () => (
  <section>
    <img data-src={jest} alt="Jest" />
    <img data-src={airbnb} alt="AirBnB" />
    <h2>Tests Unitaires</h2>
    <p>
      La base de la programmation<br />
      Technique liée à l'approche <strong>Agile</strong><br />
      Tester vos méthodes et vos services<br />
      Gagner du temps dans vos développements
    </p>
    <p><span className="grey"><strike><em>Tester c'est douter !</em></strike></span></p>
  </section>
);

export default UnitTest;
