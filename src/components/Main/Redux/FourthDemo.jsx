import React from 'react';
import marked from 'marked';

const FOURTH_DEMO = `
  # Demo 4.0

  ## Counter

  State Management

  ### Code SandBox

  [https://codesandbox.io/s/xpzqrz55kq](https://bit.ly/2BWvLDc)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

const FourthDemo = () => (
  <section id="fourth-demo">
    <span dangerouslySetInnerHTML={{ __html: marked(FOURTH_DEMO) }}></span>
  </section>
);

export default FourthDemo;
