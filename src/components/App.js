import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario'

function App() {
  return (
<div className="App container">
  <Header
  titulo='Gasto Semanal'
  />
  <div className="contenido-principal contenido">
    <div className="row">
      <div clssName="one-halg column">
        <Formulario />
      </div>
      <div clssName="one-halg column">

      </div>
    </div>
  </div>
</div>
    );
}

export default App;
