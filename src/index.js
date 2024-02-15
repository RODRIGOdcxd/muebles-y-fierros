import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//import Cabecera from './Componentes/cabecera'
//import Main from './Componentes/main'
import Cabecera2 from './Componentes/cabecera2'
import Main2 from './Componentes/main2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Cabecera />
    <Main /> */}
    <Cabecera2 />
    <Main2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
