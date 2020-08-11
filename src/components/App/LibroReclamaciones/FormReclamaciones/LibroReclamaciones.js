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
                resProduServi:'',
                motivo:'',
                respTipo:'',
                pedido:'',
                detalle:'',
                menorEdad:'',
                dniApoderado:'',
                nombreApoderado:'',
                primerApellidoApo:'',
                segundoApellidoApo:'',
                repreEmpresa:'',
                razonSocial:'',
                ruc_rus:'',
            },
            guardarReclamo:{
                resultado:[]
                },
           
            Nro_Incidencia:{
                resultado:[]
            },
            crearPDF:{
                resultado:[]
            },
            email:{
             resultado:[]
            },
            mostrar:false,
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

            var fechaActual=new Date();
            this.state.form.fecha=fechaActual;
            // console.log(this.state.form.fecha);
            const nombreCompleto=this.state.form.nombre+' '+this.state.form.primerApellido+' '+this.state.form.segundoApellido
            var tipoIncidencia='';

            if(this.state.form.resProduServi==='producto'){
                tipoIncidencia='301';
            }else{
                tipoIncidencia='201';
            }   
            // console.log(tipoIncidencia);
            const variables={
                procedure:'USP_SOP_INCIDENCIAS_G',
                parametros:[
                    {nom_parametro:'Id_Incidencia',valor_parametro:''},
                    {nom_parametro:'Nro_Incidencia',valor_parametro:''},
                    {nom_parametro:'Id_ClienteProveedor',valor_parametro:'105684'},
                    {nom_parametro:'Id_Terminal',valor_parametro:''},
                    {nom_parametro:'Cod_TipoIncidencia',valor_parametro:tipoIncidencia},
                    {nom_parametro:'Cod_Prioridad',valor_parametro:'003'},
                    {nom_parametro:'Cod_Complejidad',valor_parametro:'003'},
                    {nom_parametro:'Nro_Contacto',valor_parametro:this.state.form.celular},
                    {nom_parametro:'Nom_Contacto',valor_parametro:nombreCompleto},
                    {nom_parametro:'Detalle',valor_parametro:this.state.form.detalle},
                    {nom_parametro:'Respuesta',valor_parametro:''},
                    {nom_parametro:'Cod_MedioOrigen',valor_parametro:'006'},
                    {nom_parametro:'Obs_Incidencia',valor_parametro:this.state.form.motivo},
                    {nom_parametro:'Cod_Estado',valor_parametro:'001'},
                    {nom_parametro:'Fecha_Inicia',valor_parametro:this.state.form.fecha},
                    {nom_parametro:'Fecha_Finaliza',valor_parametro:''},
                    {nom_parametro:'Cod_UsuarioIncidencia',valor_parametro:'WEB'},
                    {nom_parametro:'Cod_TipoEncuesta',valor_parametro:this.state.form.respTipo},
                    {nom_parametro:'Pregunta1',valor_parametro:''},
                    {nom_parametro:'Pregunta2',valor_parametro:''},
                    {nom_parametro:'Pregunta3',valor_parametro:''},
                    {nom_parametro:'Cod_Usuario',valor_parametro:'WEB'},
                ]
            }
            const reclamo= await api.libroReclamaciones.guardarReclamo(variables); 
            // console.log(reclamo);
            // console.log(reclamo.message);
            this.setState({
                guardarReclamo:{resultado:[].concat(this.state.guardarReclamo,reclamo.resultado)}
            });
            if(reclamo.message==="datoGuardado"){
                const datosReclamo={
                procedure:'USP_SOP_INCIDENCIAS_TraerNroIncidencia',
                parametros:[
                    {nom_parametro:"Nom_Contacto",valor_parametro:nombreCompleto},
                    {nom_parametro:"Fecha_Inicia",valor_parametro:this.state.form.fecha}
                    ]
                }
             
             const nroIncidencia=await api.libroReclamaciones.traerNroIncidencia(datosReclamo);
            //  console.log(nroIncidencia);
             this.setState({
                Nro_Incidencia:{resultado:[].concat(this.state.Nro_Incidencia,nroIncidencia.resultado)}
             });
             const incidenciaNro=nroIncidencia.resultado["0"].Nro_Incidencia;
            
                const datosPDF={
                    fecha:this.state.form.fecha,
                    numeroReclamaciones:incidenciaNro,
                    nombre:this.state.form.nombre,
                    primerApellido:this.state.form.primerApellido,
                    segundoApellido:this.state.form.segundoApellido,
                    domicilo:this.state.form.domicilio,
                    dni:this.state.form.dni,
                    email:this.state.form.email,
                    celular:this.state.form.celular,
                    resProduServi:this.state.form.resProduServi,
                    respTipo:this.state.form.respTipo,
                    motivo:this.state.form.motivo,
                    pedido:this.state.form.pedido,
                    detalle:this.state.form.detalle,
                    dniApoderado:this.state.form.dniApoderado,
                    nombreApoderado: this.state.form.nombreApoderado,
                    primerApellidoApo:this.state.form.primerApellidoApo,
                    segundoApellidoApo:this.state.form.segundoApellidoApo, 
                    razonSocial:this.state.form.razonSocial,
                    ruc_rus:this.state.form.ruc_rus
             }
            const crearPDF= await api.libroReclamaciones.creacionPDF(datosPDF);
            // console.log(crearPDF);
            this.setState({
                crearPDF:{resultado:[].concat(this.state.crearPDF,crearPDF.resultado)}
            });

            if(crearPDF.message==="creadoPDF"){
            const datosEmail={
                numeroReclamaciones:incidenciaNro,
                nombre:this.state.form.nombre,
                primerApellido:this.state.form.primerApellido,
                segundoApellido:this.state.form.segundoApellido,
                email:this.state.form.email

            }
            const email=await api.libroReclamaciones.enviarEmail(datosEmail);
            // console.log(email);
            this.setState({
                email:{resultado:[].concat(this.state.email,email.resultado)}
            });
            if(email.message==="EnviadoEmail"){
        
                window.location.href = '/'; 
        
              }

            }else{

                console.log("No se pudo crear el pdf")
             }
            }
            else{
                console.log("No se pudo guardar los datos");
                   
            }

        }catch(error){
            console.log('Error',error);
            // alert('revise los datos porfavor hubo un error');
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
                            <input type="radio" name="menorEdad" value="SI"/><label>  SI</label>
                        </div>
                        <div>
                           <input type="radio" name="menorEdad"  value="NO"/> <label>NO</label>
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
                                    <input type="number" id="dni_ruc" value={this.state.form.dniApoderado} onChange={this.handleChange} name="dniApoderado" placeholder="Ingrese su numero de documento"/>
                                </div>
                             </div>
                             <div className="Form_colum">
                             <div>
                                <label>
                                    Nombres
                                </label>
                                <div>
                                    <input type="text" id="nombreApoderado" value={this.state.form.nombreApoderado} onChange={this.handleChange} name="nombreApoderado" placeholder="Ingrese sus nombres"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Primer apellido
                                </label>
                                <div>
                                    <input type="text" id="primerApellidoApo" value={this.state.form.primerApellidoApo} onChange={this.handleChange} name="primerApellidoApo" placeholder="Ingrese primer apellido"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Segundo apellido
                                </label>
                                <div>
                                    <input type="text" id="segundoApellidoApo" value={this.state.form.segundoApellidoApo} onChange={this.handleChange} name="segundoApellidoApo" placeholder="Ingrese segundo apellido"/>
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
                            <input type="number" id="dni_ruc" value={this.state.form.dni} onChange={this.handleChange} name="dni" placeholder="Ingrese su numero de documento"/>
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
                       <input type="radio" name="repreEmpresa" value="SI" /><label> SI</label>
                    </div>
                    <div>
                        <input type="radio" name="repreEmpresa"  value="NO" /><label>NO</label>
                    </div>

                    </div>
                </div>

                <div>
                    {this.state.form.repreEmpresa==="SI"? 
                        <div className="Form_colum">
                        <div>
                           <label>
                             RUC/RUS
                           </label>
                           <div>
                               <input type="number" id="ruc_rus" value={this.state.form.ruc_rus} onChange={this.handleChange} name="ruc_rus" placeholder="Ingrese su RUC/RUS"/>
                           </div>
                       </div>
                        <div>
                           <label>
                            Razon Social
                           </label>
                           <div>
                               <input type="text" id="razonSocial" value={this.state.form.razonSocial} onChange={this.handleChange} name="razonSocial" placeholder="Ingrese su razon Social"/>
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
                                <input type="text" id="celular" name="domicilio" value={this.state.form.domicilio} onChange={this.handleChange} placeholder="Ingrese su domicilio"/>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div>
                    <p>Detalles del Reclamo</p>
                    <hr/>
                    <div className="Form_colum">
                        <div>
                            <label>Producto/Servicio
                            <select name="resProduServi" value={this.state.form.resProduServi} onChange={this.handleChange}>
                                <option name="resProduServi" value="servicio">Software</option>
                                <option name="resProduServi" value="producto">Hardware</option>   
                            </select>
                            </label>
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
                        <div>
                            <div>
                                <label>Tipo</label>
                            </div>
                            <div className="Form_filas" id="Tipo" value={this.state.form.respTipo} onChange={this.handleChange}>
                            <div>
                               <input type="radio" name="respTipo" value="Reclamo"/><label>Reclamo</label> 
                            </div>
                            <div>
                                <input type="radio"  name="respTipo"  value="Queja"/><label>Queja</label>
                            </div>

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