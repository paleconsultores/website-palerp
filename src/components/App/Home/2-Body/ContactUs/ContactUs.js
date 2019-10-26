// Dependencies
import React from "react";
import { Form } from "../../../../../shared/Form";

// Resources
import './ContactUs.css';

export function ContactUs() {
  return (
    <section id="ContactUs" className="contact-us">
      <div className="contact-us__content">
        <h1 className="title title--small title--gray">¿Tienes alguna pregunta?</h1>
        <p className="contact-us__paragraph">Esbribemos, estaremos atentos para responder lo antes posible.</p>
      </div>
      <Form method="POST" />
    </section>
  )
}