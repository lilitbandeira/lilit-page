import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Componentes/Home/home';
import Sonora from './Componentes/Sonora/sonora';
import Audiovisual from './Componentes/Audiovisual/audiovisual';
import Producao from './Componentes/Producao/producao';

function App() {
  return (
    <BrowserRouter>
      <div className={"App"}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sonora' component={Sonora} />
          <Route path='/audiovisual' component={Audiovisual} />
          <Route path='/producao' component={Producao} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
