import React, { Component } from 'react';
import Site from './site';
import Rodape from './componentes/rodape';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Site />
        <Rodape />
      </div>
    );
  }
}

export default App;
