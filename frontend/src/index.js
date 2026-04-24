import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SalonProvider } from './context/SalonContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SalonProvider>
      <App />
    </SalonProvider>
  </React.StrictMode>
);

reportWebVitals();
