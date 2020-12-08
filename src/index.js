import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from './Componentes/Rodape/rodape';
import Social from './Componentes/Social/social';
import Menu from './Componentes/Menu/menu';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Social />
    <App />
    <Rodape />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

/* 
1. colocar menu pra ocultar e ficar fixo no topo;
2. colocar social pra ocultar;
3. formulário reactstrap no footer;
4. preparar requisição pra pesquisa;
5. preparar requisição pra inscrição;

*/
