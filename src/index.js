import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/solarized.css';
import 'highlight.js/styles/atom-one-dark.css';
import './hue.scss';
import './styles.scss';
import './index.scss';

render(
  <App />,
  document.getElementById('app')
);

serviceWorker.unregister();
