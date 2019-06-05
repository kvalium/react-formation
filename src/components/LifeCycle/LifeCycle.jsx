import React from 'react';
import { Intro, Render, Constructor, Hooks, RenderHooks, StateHooks, PropsHooks, ShouldCompoUpdate } from '.';
import lifecycle from "../../assets/lifecycle-title.png";

const LifeCycle = () => (
  <section>
    <section id="lifecycle" className="dark" data-background-color="#282c34">
      <img style={{height: 350}} src={lifecycle} alt="" />
      <h1>Le cycle de vie du composant</h1>
    </section>
    <Intro />
    <Render />
    <Constructor />
    <Hooks />
    <RenderHooks />
    <StateHooks />
    <PropsHooks />
    <ShouldCompoUpdate />
  </section>
);

export default LifeCycle;
