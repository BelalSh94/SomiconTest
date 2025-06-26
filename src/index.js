// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // ← make sure this imports your Tailwind + globals
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
