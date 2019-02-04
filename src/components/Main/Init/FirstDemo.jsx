import React from 'react';
import marked from 'marked';

const FIRST_DEMO = `
  # Demo 1.0

  ## Counter
  
  Hello World
  
  ### Code SandBox
  
  [https://codesandbox.io/s/1vyykjr617](https://bit.ly/2AsutQa)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

const FirstDemo = () => (
  <section id="first-demo">
    <span dangerouslySetInnerHTML={{ __html: marked(FIRST_DEMO) }}></span>
  </section>
);

export default FirstDemo;
