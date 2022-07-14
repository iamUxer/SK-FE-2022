import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import './styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './app/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals(console.log);
