import React from 'react';
import logo from '../../assets/logo.png';
import { Intro, Syntax, Jsx, Source, VirtualDom, Imbrication, ThinkingReact } from '.';

const Basics = () => (
  <section>
    <section id="topic-title" className="dark" data-background-color="#282c34">
      <img data-src={logo} alt="React" style={{ height: 450 }} />
      <h1>React</h1>
    </section>
    <Intro />
    <Syntax />
    <Jsx />
    <Source />
    <Imbrication />
    <ThinkingReact />
    <VirtualDom />
    {/* <FirstDemo /> */}
  </section>
);

export default Basics;
