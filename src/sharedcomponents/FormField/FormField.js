// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Resources
import './FormField.css';

export function FormField({
                            formType="input",
                            type="text",
                            name="input",
                            content = name,
                            value = '',
                            handleChange
                          }) 
{
  function selector() {
    switch (formType) {
      case "input":
        return <input className="form-control" type={type} name={name} placeholder={"Tu " + content} onChange={handleChange} value={value}/>;
      case "textarea":
        return <textarea className="form-control" rows={3} name={name} placeholder={"Tu " + content} onChange={handleChange} value={value}/>;
      case "button":
        return <button className="button button--blue" type="submit">{content}</button>
    }
  }

  return(
    <div className="form-field">
      {selector()}
    </div>
  );
}

FormField.propTypes = {
  formType: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};