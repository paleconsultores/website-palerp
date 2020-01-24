import React from 'react';
//Resources
import imagen from './Reclamaciones.jpg';
import './LibroReclamaciones.css';
import '../../../../api';
import api from '../../../../api';
export default class LibroReclamaciones extends React.Component{
    constructor(props){
        super(props)
        this.state={
            form:{
                fecha:'',
                numeroReclamaciones:'',
                nombre:'',
                primerApellido:'',
                segundoApellido:'',
                domicilio:'',
                dni:'',
                email:'',
                celular:'',
                representante:'',
                resProducto:'',
                resServicio:'',
                motivo:'',
                respReclamo:'',
                respQueja:'',
                pedido:'',
                detalle:'',
                menorEdad:'',
                dniApoderado:'',
                nombreApoderado:'',
                primerApellidoApo:'',
                segundoApellidoApo:'',
                repreEmpresa:'',

            },
            data:{
                resultado:[]
                },
              consulta:{
                message:undefined
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
            // const variables={
            //     procedure:'',
            //     parametros:[
            //         {nom_parametro:'fecha',valor_parametro:this.state.form.fecha},
            //         {nom_parametro:'numeroReclamaciones',valor_parametro:this.state.form.numeroReclamaciones},
            //         {nom_parametro:'nombre',valor_parametro:this.state.form.nombre},
            //         {nom_parametro:'primerApellido',valor_parametro:this.state.form.primerApellidoApellido},
            //         {nom_parametro:'segundoApellido',valor_parametro:this.state.form.segundoApellido},
            //         {nom_parametro:'domicilo',valor_parametro:this.state.form.domicilio},
            //         {nom_parametro:'dni',valor_parametro:this.state.form.dni},
            //         {nom_parametro:'email',valor_parametro:this.state.form.email},
            //         {nom_parametro:'celular',valor_parametro:this.state.form.celular},
            //         {nom_parametro:'representante',valor_parametro:this.state.form.representante},
            //         {nom_parametro:'resProducto',valor_parametro:this.state.form.resProducto},
            //         {nom_parametro:'resServicio',valor_parametro:this.state.form.resServicio},
            //         {nom_parametro:'motivo',valor_parametro:this.state.form.motivo},
            //         {nom_parametro:'respQueja',valor_parametro:this.state.form.respQueja},
            //         {nom_parametro:'pedido',valor_parametro:this.state.form.pedido},
            //         {nom_parametro:'detalle',valor_parametro:this.state.form.detalle}
            //     ]
            // }
            var fechaActual=new Date();
            this.state.form.fecha=fechaActual;
            const datos={

                   fecha:this.state.form.fecha,
                   numeroReclamaciones:this.state.form.numeroReclamaciones,
                   nombre:this.state.form.nombre,
                   primerApellido:this.state.form.primerApellidoApellido,
                   segundoApellido:this.state.form.segundoApellido,
                   domicilo:this.state.form.domicilio,
                   dni:this.state.form.dni,
                   email:this.state.form.email,
                   celular:this.state.form.celular,
                   representante:this.state.form.representante,
                   resProducto:this.state.form.resProducto,
                   resServicio:this.state.form.resServicio,
                   motivo:this.state.form.motivo,
                   respQueja:this.state.form.respQueja,
                   pedido:this.state.form.pedido,
                   detalle:this.state.form.detalle,
                   dniApoderado:this.state.form.dniApoderado,
                   nombreApoderado: this.state.form.nombreApoderado,
                   primerApellidoApo:this.state.form.primerApellidoApo,
                   segundoApellidoApo:this.state.form.segundoApellidoApo 
            }
        const data= await api.libroReclamaciones.creacionPDF(datos);
        //         if(data.message==="datoGuardado"){
                
        //             window.location.href = '/'; 
            
        // }
          
          this.setState({
            consulta:{message:[].concat(this.state.data,data.message)},
            data:{resultado:[].concat(this.state.data,data.resultado)}
          });
        // const data= await apiGeneral.LibroReclamaciones.guardar(variables);
        // if(data.message==="datoGuardado"){
        
        //     window.location.href = '/'; 
    
        //   }
          
        //   this.setState({
        //     consulta:{message:[].concat(this.state.data,data.message)},
        //     data:{resultado:[].concat(this.state.data,data.resultado)}
        //   });

        }catch(error){
            console.log('Error',error)
            alert('revise los datos porfavor hubo un error');
        }

    }
    render(){
    return(
        <div className="FormReclamaciones">
            <div className="Form_encabezado">
                 <h1>Libro de Reclamaciones</h1>
                 <img src={imagen} alt='libro reclamaciones'/>
            </div>
           
            <form>
                <div>
                    <p>Datos Personales</p>
                    <hr/>
                    <div>
                        <div>
                            <label>¿Menor de Edad?</label>
                        </div>
                        <div className="Form_filas" id="menorEdad" value={this.state.form.menorEdad} onChange={this.handleChange}>
                        <div>
                            <label><input type="radio" name="menorEdad" value="SI" /> SI</label>
                        </div>
                        <div>
                            <label><input type="radio" name="menorEdad"  value="NO" />NO</label>
                        </div>

                        </div>
                    </div>
                    <div>
                    {this.state.form.menorEdad==="SI"?
                        <div>
                           <p>Datos del Apoderado</p>
                           <hr/>
                           <div>
                                <div>
                                    <label>
                                        DNI
                                    </label>   
                                </div>
                                <div>
                                    <input type="number" id="dni_ruc" value={this.state.form.ruc} onChange={this.handleChange} name="dni" placeholder="Ingrese su numero de documento"/>
                                </div>
                             </div>
                             <div className="Form_colum">
                             <div>
                                <label>
                                    Nombres
                                </label>
                                <div>
                                    <input type="text" id="nombre" value={this.state.form.nombre} onChange={this.handleChange} name="nombre" placeholder="Ingrese sus nombres"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Primer apellido
                                </label>
                                <div>
                                    <input type="text" id="primerApellido" value={this.state.form.primerApellido} onChange={this.handleChange} name="primerApellido" placeholder="Ingrese primer apellido"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Segundo apellido
                                </label>
                                <div>
                                    <input type="text" id="segundoApellido" value={this.state.form.segundoApellido} onChange={this.handleChange} name="segundoApellido" placeholder="Ingrese segundo apellido"/>
                                </div>
                            </div>
                         </div> 
                        </div> :this.state.form.menorEdad==="NO"? null:null} 
                    </div>

                    <div>
                        <p>Datos del Solicitante</p>
                        <hr/>
                        <div>
                            <label>
                                DNI
                            </label>   
                        </div>
                        <div>
                            <input type="number" id="dni_ruc" value={this.state.form.ruc} onChange={this.handleChange} name="dni" placeholder="Ingrese su numero de documento"/>
                        </div>
                    </div>
                       <div className="Form_colum">
                             <div>
                                <label>
                                    Nombres
                                </label>
                                <div>
                                    <input type="text" id="nombre" value={this.state.form.nombre} onChange={this.handleChange} name="nombre" placeholder="Ingrese sus nombres"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Primer apellido
                                </label>
                                <div>
                                    <input type="text" id="primerApellido" value={this.state.form.primerApellido} onChange={this.handleChange} name="primerApellido" placeholder="Ingrese primer apellido"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Segundo apellido
                                </label>
                                <div>
                                    <input type="text" id="segundoApellido" value={this.state.form.segundoApellido} onChange={this.handleChange} name="segundoApellido" placeholder="Ingrese segundo apellido"/>
                                </div>
                            </div>
                         </div> 

                </div>
                <div>
                    <div>
                        <label>¿Representa a una empresa?</label>
                    </div>
                    <div className="Form_filas" id="Empresa" value={this.state.form.repreEmpresa} onChange={this.handleChange}>
                    <div>
                        <label><input type="radio" name="repreEmpresa" value="SI" /> SI</label>
                    </div>
                    <div>
                        <label><input type="radio" name="repreEmpresa"  value="NO" />NO</label>
                    </div>

                    </div>
                </div>

                <div>
                    {this.state.form.repreEmpresa==="SI"? 
                        <div className="Form_colum">
                        <div>
                           <label>
                            Razon Social
                           </label>
                           <div>
                               <input type="text" id="nombre" value={this.state.form.nombre} onChange={this.handleChange} name="nombre" placeholder="Ingrese su razon Social"/>
                           </div>
                       </div>
                       <div>
                           <label>
                             RUC/RUS
                           </label>
                           <div>
                               <input type="text" id="primerApellido" value={this.state.form.primerApellido} onChange={this.handleChange} name="primerApellido" placeholder="Ingrese su RUC/RUS"/>
                           </div>
                       </div>
                    </div> 
                     :this.state.form.repreEmpresa==="NO"? null:null} 
                </div>

                <div>
                    <p>Datos del Contacto</p>
                    <hr/>
                    <div className="Form_colum">
                        <div>
                            <label>
                                E-mail
                            </label>
                            <div>
                                <input type="email" id="email" name="email" value={this.state.form.email} onChange={this.handleChange} placeholder="Ingrese su email"/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Celular
                            </label>
                            <div>
                                <input type="number" id="celular" name="celular" value={this.state.form.celular} onChange={this.handleChange} placeholder="Ingrese su celular"/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Domicilio
                            </label>
                            <div>
                                <input type="text" id="celular" name="domicilio" value={this.state.form.domicilio} onChange={this.handleChange} placeholder="Ingrese su celular"/>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div>
                    <p>Detalles del Reclamo</p>
                    <hr/>
                    <div className="Form_colum">
                        <div>
                            <label>
                                Producto
                            </label>
                            <div>
                                <input type="text" id="producto" name="resProducto" value={this.state.form.resProducto} onChange={this.handleChange} placeholder="Ingrese producto o servicio"/>
                            </div>
                        </div>
                        <div>
                            <label>
                               Servicio
                            </label>
                            <div>
                                <input type="text" id="producto" name="resProducto" value={this.state.form.resServicio} onChange={this.handleChange} placeholder="Ingrese servicio"/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Motivo
                            </label>
                            <div>
                                <input type="text" id="motivo" name="motivo"  value={this.state.form.motivo} onChange={this.handleChange} placeholder="Ingrese motivo"/>
                            </div>
                        </div>
                       
                    </div>
                    <div>
                        <div>
                            <label>
                                Pedido
                            </label>
                            <div>
                                <textarea id="pedido" name="pedido" value={this.state.form.pedido} onChange={this.handleChange} placeholder="Ingrese el pedido"/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Detalle
                            </label>
                            <div>
                                <textarea id="detalle" name="detalle" value={this.state.form.detalle} onChange={this.handleChange} placeholder="Ingrese el detalle" ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button onClick={this.handleSubmit}>Enviar</button>
        </div>
        )
    }
}