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
    state,
    onChangeEvent,
    onSubmitEvent
  })
{
  return(
    <form className="form" method={method} onSubmit={onSubmitEvent}>
      {state.map((item) =>
          <FormField
            key={state.indexOf(item)}
            formType={item.formType} 
            name={item.name}
            content={item.content}
            value={item.value}
            handleChange={onChangeEvent}
          />
      )}
    </form>
  )
}

Form.propTypes = {
  method: PropTypes.string,
  state: PropTypes.array,
  onChangeEvent: PropTypes.func.isRequired,
  onSubmitEvent: PropTypes.func.isRequired
};