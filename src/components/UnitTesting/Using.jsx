import React from 'react';

const Using = () => (
  <section id="using">
    <h2>Utilisation</h2>
    <p>Création d'une suite de tests unitaires <code>__tests__/MyComponent.test.js</code> :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { shallow } from 'enzyme';
  import MyComponent from '../MyComponent';

  describe('MyComponent', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <MyComponent>
          Content
        </MyComponent>
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('shows expected label', () => {
      wrapper.setProps({ label: 'Hello World' });
      expect(wrapper.find("h1")).toEqual('Hello World');
    });
  });
    `}</code></pre>
  </section>
);

export default Using;
