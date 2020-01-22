import React from 'react';
//Resources
import imagen from './Reclamaciones.jpg';
import './LibroReclamaciones.css';

export default class LibroReclamaciones extends React.Component{
    // const [ruc, setRUC] = useState('');
    // const [date, setDate] = useState('');
    // const [serie, setSerie] = useState('');
    // const [numero, setNumero] = useState('');
    // const [tipo, setTipo] = useState('01');
    // const [verified, setverified] = useState(false);
    constructor(props){
        super(props)
        this.state={
            form:{
                ruc:"",
                nombre:"",
                primerApellido:"",
                segundoApellido:"",
                email:"",
                celular:"",
                producto_servicio:"",
                motivo:"",
                detalle:"",
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
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }
    async handleSubmit(e){
        e.preventDefault();

        try{
            const variables={
                procedure:'',
                parametros:[
                    {nom_parametro:'',valor_parametro:this.state.form.ruc},
                    {nom_parametro:'',valor_parametro:this.state.form.nombre},
                    {nom_parametro:'',valor_parametro:this.state.form.primerApellido},
                    {nom_parametro:'',valor_parametro:this.state.form.segundoApellido},
                    {nom_parametro:'',valor_parametro:this.state.form.email},
                    {nom_parametro:'',valor_parametro:this.state.form.celular},
                    {nom_parametro:'',valor_parametro:this.state.form.producto_servicio},
                    {nom_parametro:'',valor_parametro:this.state.form.motivo},
                    {nom_parametro:'',valor_parametro:this.state.form.detalle}
                ]
            }
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
                            <label>
                                DNI/RUC
                            </label>   
                        </div>
                        <div>
                            <input type="number" id="dni_ruc" value={this.state.form.ruc} name="dni_ruc" placeholder="Ingrese su numero de documento"/>
                        </div>
                    </div>
         
                       <div className="Form_colum">
                             <div>
                                <label>
                                    Nombres
                                </label>
                                <div>
                                    <input type="text" id="nombre" value={this.state.form.nombre} name="nombre" placeholder="Ingrese sus nombres"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Primer apellido
                                </label>
                                <div>
                                    <input type="text" id="primerApellido" value={this.state.form.primerApellido} name="primerApellido" placeholder="Ingrese primer apellido"/>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Segundo apellido
                                </label>
                                <div>
                                    <input type="text" id="segundoApellido" value={this.state.form.segundoApellido} name="segundoApellido" placeholder="Ingrese segundo apellido"/>
                                </div>
                            </div>
                         </div> 
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
                                <input type="email" id="email" name="email" value={this.state.form.email} placeholder="Ingrese su email"/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Celular
                            </label>
                            <div>
                                <input type="number" id="celular" name="celular" value={this.state.form.celular} placeholder="Ingrese su celular"/>
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
                                Producto/Servicio
                            </label>
                            <div>
                                <input type="text" id="producto" name="producto" value={this.state.form.producto_servicio} placeholder="Ingrese producto o servicio"/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Motivo
                            </label>
                            <div>
                                <input type="text" id="motivo" name="motivo"  value={this.state.form.motivo} placeholder="Ingrese motivo"/>
                            </div>
                        </div>
                       
                    </div>
                    <div>
                        <div>
                            <label>
                                Detalle
                            </label>
                            <div>
                                <textarea type="text" id="detalle" name="detalle" value={this.state.form.detalle} placeholder="Ingrese el detalle" ></textarea>
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