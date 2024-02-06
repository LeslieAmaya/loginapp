import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usuario:"",
            password:"",
            mensaje:""
        }
        this.handlerUsuario=this.handlerUsuario.bind(this);
        this.handlerPassword=this.handlerPassword.bind(this);
        this.validarUsuario=this.validarUsuario.bind(this);
    }

    handlerUsuario(event){
        this.setState({usuario:event.target.value});
    }
    handlerPassword(event){
        this.setState({password:event.target.value});
    }
    validarUsuario(){
        var usu=this.state.usuario;
        var pas=this.state.password;
        if(usu=='admon'){
            if(pas=='1234'){
                this.setState({mensaje: ""});
                localStorage.setItem('user', usu);
                localStorage.setItem('pass', pas);
                window.location.reload();
            }
            else{
                this.setState({mensaje: "Password incorrecto"});
            }
        }
        else 
            this.setState({mensaje: "Usuario incorrecto"});
    }
    render(){
        return(
            <div>
                <table border = '1'>
                    <tr>
                        <td colSpan="2"> Inicio de Sesion </td>
                    </tr>
                    <tr>
                        <td>Usuario: </td>
                        <td><input value={this.state.usuario} onChange={this.handlerUsuario}/></td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td><input value={this.state.password} onChange={this.handlerPassword} type="password"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button style={{width:"100%"}} onClick={this.validarUsuario}>ACEPTAR</button></td>
                    </tr>
                </table>
                <div style={{color:"red"}}>{this.state.mensaje}</div>
            </div>
        );
    }
}
export default Login;