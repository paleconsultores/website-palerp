// Dependencies
import React from "react";
import { Form } from "../../../../../sharedcomponents/Form";
import  FormContactUs  from "./FormContactUs//FormContactUs";

// Resources
import './ContactUs.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './ContacEn';
import es from './ContacEs';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('es');


export default function ContactUs() {
  // console.log(<Translate content="titleContaus" component="h1" className="title title--small title--gray"/>);
  return (
    <section id="ContactUs" className="contact-us">
      <div className="contact-us__content">
        {/* <h1 className="title title--small title--gray">¿Tienes alguna pregunta?</h1> */}
        <Translate content="titleContaus" component="h1" className="title title--small title--gray"/>
        {/* <p className="contact-us__paragraph">Esbribemos, estaremos atentos para responder lo antes posible.</p> */}
        <Translate content="comentario" component="p" className="contact-us__paragraph"/>
      </div>
      <FormContactUs />
    </section>
  )
}