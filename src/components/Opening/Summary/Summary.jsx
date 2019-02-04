import React from 'react';
import Reminders from './Reminders';
import Topic from './Topic';
import Overview from './Overview';

const Summary = () => (
  <section>
    <section id="summary">
      <h1>Sommaire</h1>
    </section>
    <Reminders />
    <Topic />
    <Overview />
  </section>
);

export default Summary;
