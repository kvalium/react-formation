import React from 'react';
import Hooks from './Hooks';
import RenderHooks from './RenderHooks';
import StateHooks from './StateHooks';
import PropsHooks from './PropsHooks';
import ShouldCompoUpdate from './ShouldCompoUpdate';

const LifeCycle = () => (
  <section>
    <section id="lifecycle" className="dark" data-background-color="#282c34">
      <h1>Cycle De Vie</h1>
    </section>
    <Hooks />
    <RenderHooks />
    <StateHooks />
    <PropsHooks />
    <ShouldCompoUpdate />
  </section>
);

export default LifeCycle;
