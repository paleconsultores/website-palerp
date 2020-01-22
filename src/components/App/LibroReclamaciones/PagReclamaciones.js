import React from 'react';
//Resources 
import {Header} from '../Home/1-Header/Header';
import LibroReclamaciones from './FormReclamaciones/LibroReclamaciones';
import {Footer} from '../Home/3-Footer/Footer';


export default function PagLibroReclamaciones() {
    return(
        <section>
            <Header />
            <LibroReclamaciones />
            <Footer />
        </section>
    )
}