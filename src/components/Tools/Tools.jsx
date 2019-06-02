import React from 'react';
import DevEnv from './DevEnv';
import Editors from './Editors';
import VersionManager from './VersionManager';
import TaskRunner from './TaskRunner';
import DepManager from './DepManager';
import Linter from './Linter';
import Design from './Design';
import Transpiler from './Transpiler';
import Bundler from './Bundler';
import Transition from './Transition';
import UnitTest from './UnitTest';

const Tools = () => (
  <section>
    <section id="tools" className="dark" data-background-color="#282c34">
      <h1>Outils</h1>
    </section>
    <DevEnv />
    <Editors />
    <VersionManager />
    {/* <TaskRunner /> */}
    <DepManager />
    <Linter />
    <Design />
    <Transpiler />
    <Bundler />
    <Transition />
    <UnitTest />
  </section>
);

export default Tools;
