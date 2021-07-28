import React, {Component} from 'react';

class FormularioGasto extends Component{
//Refs para los campos del formuario
nombreGasto = React.createRef();
cantidadGasto = React.createRef();

crearGasto = (e) => {
//Prevenir el default
e.preventDefaut();
//crear el objeto con los datos
const gasto ={
    nombreGasto : this.nombreGasto.current.value,
    cantidadGasto: this.nombreGasto.current.value
}
//agregarlo y enviarlo por props


// resetear el formulario 
e.currentTarget.reset();
}

    render(){
        return(
            <form onSubmit={this.createGasto}>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
            </div>
        
            <div className="campo">
                <label>Cantidad</label>
                <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
        </form>
        )
    }
}

export default FormularioGasto;