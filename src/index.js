import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from './Componentes/Rodape/rodape';
import Menu from './Componentes/Menu/menu';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <App />
    <Rodape />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
