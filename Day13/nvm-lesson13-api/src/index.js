import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NvmApp from './NvmApp';

const nvmRoot = ReactDOM.createRoot(document.getElementById('nvmRoot'));
nvmRoot.render(
  <React.StrictMode>
    <NvmApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
