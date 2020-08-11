import React from 'react';
//Resources
import api from "../../../../../../api";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en  from './FormEn';
import es  from './FormEs';
counterpart.registerTranslations('en',en);
counterpart.registerTranslations('es',es);
counterpart.setLocale('es');


export default class FormContact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            form:{
                nombre:'',
                correo:'',
                mensaje:'',
            },    
            email:{
             resultado:[]
            },
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

  handleChange(e){
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

  }

  async handleSubmit(e){
      e.preventDefault();
        try{

            const datosEmail={
                nombre:this.state.form.nombre,
                correo:this.state.form.correo,
                mensaje:this.state.form.mensaje

            }
            const email=await api.user.sendEmails(datosEmail);
            console.log(email);
            this.setState({
                email:{resultado:[].concat(this.state.email,email.resultado)}
            });

        }catch(error){
            console.log('Error',error);
        }
    }
    render(){
    return(
        <div>
            <form class="form" >
                <div class="form-field">
                    {/* <label>Nombre</label> */}
                     <Translate content="nombreFormContatus" component="label"/>
           
                    <input class="form-control" type="text" name="nombre" minLength="3"  value={this.state.form.nombre} onChange={this.handleChange} required />
                </div>
                <div class="form-field">
                    {/* <label>Correo</label> */}
                    <Translate content="emailFormContatus" component="label" />
                    <input class="form-control" type="email" name="correo"  value={this.state.form.correo} onChange={this.handleChange} required />
                </div>
                 <div class="form-field">
                 {/* <label>Mensaje </label> */}
                 <Translate content="mensajeFormContatus" component="label" />
                     <textarea class="form-control" rows="3" name="mensaje" value={this.state.form.mensaje} onChange={this.handleChange} required />
                </div>
            </form>
            <div class="form-field">
                {/* <button class="button button--blue" onClick={this.handleSubmit}>Enviar</button> */}
                <Translate content="buttonFormContatus" component="button" class="button button--blue" onClick={this.handleSubmit} />
            </div>
        </div>
        )
    }
}