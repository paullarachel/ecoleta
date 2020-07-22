import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//index.jsx (ou .tsx): primeiro arquivo a ser lido

//renderizar o App.tsx dentro do elemento de id = root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

