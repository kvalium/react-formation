import React from 'react';
import { Intro, Render, Constructor, ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount, ExoticMethods, Errors } from '.';
import lifecycle from "../../assets/lifecycle-title.png";

const LifeCycle = () => (
  <section>
    <section id="lifecycle" className="dark" data-background-color="#282c34">
      <img style={{height: 350}} src={lifecycle} alt="" />
      <h1>Cycle de vie<br /><small>du composant</small></h1>
    </section>
    <Intro />
    <Render />
    <Constructor />
    <ComponentDidMount />
    <ComponentDidUpdate />
    <ComponentWillUnmount />
    <ExoticMethods />
    <Errors />
  </section>
);

export default LifeCycle;
