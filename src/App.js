import React, { Component } from 'react';

import Site from './site';
import Rodape from './componentes/rodape';
import Cabecalho from './componentes/cabecalho';
import Inicio from './componentes/inicio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <Inicio />
        <Site />
        <Rodape />
      </div>
    );
  }
}

export default App;
