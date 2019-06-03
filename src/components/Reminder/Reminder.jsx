import React from 'react';
import {
  JavaScript,
  EcmaScript,
  Node,
  Npm,
  Dom
} from './';

const Reminder = () => (
  <section>
    <section id="reminder" className="dark" data-background-color="#282c34">
      <h1><span className="white">Rappels</span></h1>
    </section>
    <JavaScript />
    <EcmaScript />
    <Dom />
    <Node />
    <Npm />
  </section>
);

export default Reminder;
