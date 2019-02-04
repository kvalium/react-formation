import React from 'react';
import marked from 'marked';

const SECOND_DEMO = `
  # Demo 2.0

  ## Counter

  Add 1 / Del 1 / RAZ

  ### Code SandBox

  [https://codesandbox.io/s/ql3x09o2z4](https://bit.ly/2LONYah)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

const SecondDemo = () => (
  <section id="second-demo">
    <span dangerouslySetInnerHTML={{ __html: marked(SECOND_DEMO) }}></span>
  </section>
);

export default SecondDemo;
