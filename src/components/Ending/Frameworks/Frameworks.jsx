import React from 'react';
import AngularJs from './AngularJs';
import Angular from './Angular';
import Vue from './Vue';
import Ember from './Ember';
import Meteor from './Meteor';
import Polymer from './Polymer';

const Frameworks = () => (
  <section>
    <section id="frameworks">
      <h1>Frameworks</h1>
    </section>
    <AngularJs />
    <Angular />
    <Vue />
    <Ember />
    <Meteor />
    <Polymer />
  </section>
);

export default Frameworks;
