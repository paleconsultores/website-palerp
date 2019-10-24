// Dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Resources
import { FormField } from "../FormField";
import api from "../../api";

import './Form.css';

export function Form(
  {
    method='GET',
    Submit
  })
{
  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.usuario.enviarCorreoVentas({"nombre": name, "correo": email, "mensaje": message});
    console.log(response);
    setName('');
    setEmail('');
    setMessage('');
    console.log("submit");
  }

  function onChange(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
    }
  }

  return(
    <form className="form" method={method} onSubmit={handleSubmit}>
      <FormField name="name" content="nombre" handleChange={onChange} value={name} />
      <FormField type="email" name="email" content="correo" handleChange={onChange} value={email}/>
      <FormField formType="textarea" name="message" content="mensaje" handleChange={onChange} value={message}/>
      <FormField formType="button" type="submit" content="Enviar" handleChange={onChange}/>
    </form>
  )
}

Form.propTypes = {
  method: PropTypes.string,
  Submit: PropTypes.func
};