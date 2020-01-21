import React, { useSate } from 'react';
import './LibroReclamaciones.css';

export default function LibroReclamaciones(){
    const [ruc, setRUC] = useState('');
    const [date, setDate] = useState('');
    const [serie, setSerie] = useState('');
    const [numero, setNumero] = useState('');
    const [tipo, setTipo] = useState('01');
    const [verified, setverified] = useState(false);

    return(
        <div>
            <h1>Libro de Reclamaciones</h1>
            <form>
                <div>
                    <label>
                        DNI/RUC
                    </label>
                    <div>
                        <input type="number" id="dni_ruc" placeholder="Ingrese su numero de documento"/>
                    </div>
                </div>
            </form>
        </div>
    )

}