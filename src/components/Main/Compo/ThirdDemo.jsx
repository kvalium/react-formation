import React from 'react';
import marked from 'marked';

const THIRD_DEMO = `
  # Demo 3.0

  ## Counter

  Component

  ### Code SandBox

  [https://codesandbox.io/s/1k4l6xoq4](https://bit.ly/2F27DmJ)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

const ThirdDemo = () => (
  <section id="third-demo">
    <span dangerouslySetInnerHTML={{ __html: marked(THIRD_DEMO) }}></span>
  </section>
);

export default ThirdDemo;
