import React from 'react';
import State from './State';
import Props from './Props';
import Parent from './Parent';
import Child from './Child';
import Default from './Default';
import Typing from './Typing';
import SecondDemo from './SecondDemo';

const StateProps = () => (
  <section>
    <section id="state-props">
      <h1>State & Props</h1>
      <h3><em>Comment mettre à jour le DOM lorsque les données sont modifiées ?</em></h3>
    </section>
    <State />
    <Props />
    <Parent />
    <Child />
    <Default />
    <Typing />
    <SecondDemo />
  </section>
);

export default StateProps;
