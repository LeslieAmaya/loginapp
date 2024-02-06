import React from 'react';

class Principal extends React.Component{
    constructor(props){
        super(props);
    }
    Salir(){
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        window.location.reload();
    }
    render(){
        var usuario=localStorage.getItem('user');
        var password=localStorage.getItem('pass');
        return(
            <div>Principal <br/>
            <h3>Usuario Logeado: </h3> <h1>{usuario}</h1>
            <h3>Password Logeada: </h3> <h1>{password}</h1>
            <button onClick={this.Salir}>SALIR</button>
            </div>
           
        );
    }
}
export default Principal;