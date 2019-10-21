// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Resources
import {FormField} from "../FormField";
import './Form.css';


function handleSubmit(e) {
  e.preventDefault();
  console.log("submit");
}

export function Form({method='GET', onSubmit=handleSubmit}) {

  return(
    <form className="form" method={method} onSubmit={onSubmit}>
      <FormField name="nombre" />
      <FormField type="email" name="correo"/>
      <FormField formType="textarea" name="mensaje"/>
      <FormField formType="button" type="submit" name="Enviar"/>
    </form>
  )
}

Form.propTypes = {
  method: PropTypes.string,
  onSubmit: PropTypes.func
};