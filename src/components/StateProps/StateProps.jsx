import React from 'react';
import { State, Props, Parent, Child, Default, Typing, SecondDemo, Imbrication, Other, Presentation } from '.';

const StateProps = () => (
  <section>
    <section id="state-props" className="dark" data-background-color="#282c34">
      <h1>State & Props</h1>
      <h4><em>Comment mettre à jour le DOM lorsque les données sont modifiées ?</em></h4>
    </section>
    <Presentation />
    <State />
    <Props />
    <Parent />
    <Child />
    <Default />
    <Typing />
    <Imbrication />
    <Other />
    <SecondDemo />
  </section>
);

export default StateProps;
