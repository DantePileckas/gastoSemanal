import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario'

function App() {
  
state = {
  presupuesto: '',
  restante:'',
  gastos:{}
}
  //Agregar un nuevo gasto al state
  agregarGasto = gasto =>{
    //tomar una copia de state actual
      const gastos = {...this.state.gastos}

    //agregar al gasto al objeto del state
      

    //ponerlo en state
  
  
  }
  
  return (
<div className="App container">
  <Header
  titulo='Gasto Semanal'
  />
  <div className="contenido-principal contenido">
    <div className="row">
      <div clssName="one-halg column">
        <Formulario 
          agregarGasto = {this.agregarGasto}
        />
      </div>
      <div clssName="one-halg column">

      </div>
    </div>
  </div>
</div>
    );
}

export default App;
