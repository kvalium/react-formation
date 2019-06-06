import React from 'react';
import { FullComponentProblem, ContainersPresentation, DomainDriven } from '.';

import archi from "../../assets/arch.png";

const Architecture = () => (
  <section>
    <section id="arch" className="dark" data-background-color="#282c34">
      <img style={{height: "auto"}} src={archi} alt="" />
      <h1>Architecture<br /><small>de projet</small></h1>
    </section>
    <FullComponentProblem />
    <ContainersPresentation />
    <DomainDriven />
  </section>
);

export default Architecture;
