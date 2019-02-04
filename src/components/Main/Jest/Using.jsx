import React from 'react';

const Using = () => (
  <section id="using">
    <h2>Utilisation</h2>
    <p>Création d'une suite de tests unitaires <code>MyComponent.spec.js</code> :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React from 'react';
  import { shallow, mount } from 'enzyme';
  import MyComponent from './MyComponent';

  describe('MyComponent Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <MyComponent>
          Content
        </MyComponent>
      );
    });

    it('Renders', () => {
      expect(wrapper.exists()).toBe(true);
    });

    xit('Create Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Check Props', () => {
      wrapper.setProps({ active: true, label: 'Hello World' });

      expect(wrapper.props().active).toBeTruthy();
      /* expect(wrapper.props().active).toBe(true); */
      expect(wrapper.props().children).toEqual('Content');
      expect(wrapper.props().label.trim()).toHaveLength(10);
    });
  });
    `}</code></pre>
  </section>
);

export default Using;
