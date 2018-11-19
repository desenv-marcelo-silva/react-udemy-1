import React, { Component } from 'react';

import Site from './site';
import Rodape from './componentes/rodape';
import Cabecalho from './componentes/cabecalho';
import Inicio from './componentes/inicio';
import Servicos from './componentes/servicos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <Inicio />
        <Servicos />
        <Site />
        <Rodape />
      </div>
    );
  }
}

export default App;
