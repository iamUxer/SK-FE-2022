import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/app/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    {/* component and props */}
    {/* props : { linkText: undefined }  */}
    <App linkText={undefined} />
  </StrictMode>
);

/* Build Process ------------------------------------------------------------ */
/* 'production' | 'developemnt' */

if (process.env.NODE_ENV.includes('production')) {
  import('./reportWebVitals')
    .then(({ reportWebVitals }) => reportWebVitals(console.log))
    .catch((error) => console.error(error.message));
}
