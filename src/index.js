import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/solarized.css';
import 'highlight.js/styles/darkula.css';
import './hue.css';
import './styles.css';
import './index.css';

render(
  <App />,
  document.getElementById('app')
);

serviceWorker.unregister();
