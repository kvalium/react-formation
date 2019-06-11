import React from 'react';
import DevEnv from './DevEnv';
import Editors from './Editors';
import VersionManager from './VersionManager';
import DepManager from './DepManager';
import Linter from './Linter';
import Design from './Design';
import Transpiler from './Transpiler';
import Bundler from './Bundler';
import UnitTest from './UnitTest';

const Tools = () => (
  <section>
    <section id="tools" className="dark" data-background-color="#282c34">
      <h1>Outils</h1>
    </section>
    <DevEnv />
    <Editors />
    <VersionManager />
    <DepManager />
    <Linter />
    <Design />
    <Transpiler />
    <Bundler />
    <UnitTest />
  </section>
);

export default Tools;
