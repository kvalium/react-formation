import React from 'react';
import jest from '../../../assets/jest.png';
import airbnb from '../../../assets/airbnb.png';

const UnitTest = () => (
  <section>
    <img data-src={jest} alt="Jest" />
    <img data-src={airbnb} alt="AirBnB" />
    <h2>Jest et Enzyme</h2>
    <p>
      Tests unitaires et de <i>snapshots</i><br />
      <br />
      solutions peu à peu remplacées par celle fournie par React : react-test-renderer
    </p>
    <p><span className="grey"><strike>Tester c'est douter, corriger c'est abdiquer !</strike></span></p>
  </section>
);

export default UnitTest;
