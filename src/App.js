import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Rodape from './componentes/rodape';
import Cabecalho from './componentes/cabecalho';
import Inicio from './componentes/inicio';
import Servicos from './componentes/servicos';
import Portifolio from './componentes/portifolio';
import Precos from './componentes/precos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path="/" exact component={Inicio} />
          <Route path="/services" component={Servicos} />
          <Route path="/portifolio" component={Portifolio} />
          <Route path="/precos" component={Precos} />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
