import React from 'react';
import marked from 'marked';

const SECOND_DEMO = `
  # Demo 2.0

  ## Counter

  ### CodeSandBox

  [https://codesandbox.io/s/counter-x0b2b](https://codesandbox.io/s/counter-x0b2b)
`;

const SecondDemo = () => (
  <section id="second-demo">
    <span dangerouslySetInnerHTML={{ __html: marked(SECOND_DEMO) }}></span>
  </section>
);

export default SecondDemo;
