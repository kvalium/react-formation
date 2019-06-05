import React from 'react';
import { State, Props, Parent, Child, Default, Typing, SecondDemo, Imbrication, Presentation, Stateless, Events, EventsBind } from '.';
import blueStateProps from "../../assets/state-props-blue.png"

const StateProps = () => (
  <section>
    <section id="state-props" className="dark" data-background-color="#282c34">
      <img src={blueStateProps} alt="" />
      <h1>State & Props</h1>
      <h4><em>Comment mettre à jour le DOM lorsque les données sont modifiées ?</em></h4>
    </section>
    <Presentation />
    <Props />
    <State />
    <Stateless />
    <Parent />
    <Child />
    <Default />
    <Typing />
    <Imbrication />
    <Events />
    <EventsBind />
    <SecondDemo />
  </section>
);

export default StateProps;
