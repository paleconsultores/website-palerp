// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Resources
import './FormField.css';

export function FormField({
                            formType="input",
                            type="text",
                            name="input"
                          }) {

  function selector() {
    switch (formType) {
      case "input":
        return <input className="form-control" type={type} name={name} placeholder={"Tu " + name}/>
        break;
      case "textarea":
        return <textarea className="form-control" rows={3} name={name} placeholder={"Tu " + name}/>
        break;
      case "button":
        return <button className="button" type="submit">{name}</button>
    }
  }

  return(
    <div className="form-field">
      {selector()}
    </div>
  );
}

FormField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string
};