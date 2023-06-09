import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@govbr-ds/core/dist/core.min.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
