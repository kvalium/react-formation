import React from 'react';
import AngularJs from './AngularJs';
import Angular from './Angular';
import Vue from './Vue';

const Frameworks = () => (
  <section>
    <section id="frameworks" className="dark" data-background-color="#282c34">
      <h1>Frameworks</h1>
    </section>
    <AngularJs />
    <Angular />
    <Vue />
  </section>
);

export default Frameworks;
