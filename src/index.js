import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Comfortaa, cursive;
}
`;

root.render(
  <>
    <Global />
    <App />
  </>,
);
