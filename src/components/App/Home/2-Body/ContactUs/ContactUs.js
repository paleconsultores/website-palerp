// Dependencies
import React from "react";
import { Form } from "../../../../../shared/Form";

// Resources
import './ContactUs.css';

export function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-us__content">
        <h1 className="title title--small title--gray">¿Tienes alguna pregunta?</h1>
        <p className="contact-us__paragraph">Póngase en contacto con nosotros mediante el formulario y le responderemos lo antes posible.</p>
      </div>
      <Form method="POST" />
    </section>
  )
}