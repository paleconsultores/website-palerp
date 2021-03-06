// Dependencies
import React, { useState, useEffect } from "react";
import { Form } from "../../../../../../sharedcomponents/Form/Form";
import api from "../../../../../../api";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en  from './FormEn';
import es  from './FormEs';
counterpart.registerTranslations('en',en);
counterpart.registerTranslations('en',es);
counterpart.setLocale('es');
// Resources

export  default function FormContactUs() {
  // state that keeps values that will be used on the form
  let [formState, setFormState] = useState([])
  const nombre= <Translate content="FormContactItems1.formContent" />
  const email= <Translate content="FormContactItems2.formContent" />
  const mensaje= <Translate content="FormContactItems3.formContent" />
  const emailC= <Translate content="FormContactItems4.formContent" />
  console.log(nombre);
  // UseEffect hook, that just will be called once
  useEffect(function () {
    // setting the initial value of the form state
    setFormState([
      {
        name: 'name',
        content: 'nombre', 
        value: ''
      }, 
      {
        name: 'email', 
        content:'correo',
        value: ''
      }, 
      {
        formType: 'textarea',
        name: 'message', 
        content:'mensaje',
        value: ''
      },
      {
        formType: 'button',
        type: 'submit',
        content: 'Enviar'
      }
    ])
  }, [])
  
  // function to update values of the form
  function onChange(e) {
    let newFormState = formState.map(function (item) {
      // only past values of items that have value and name properties
      if (item.name !== undefined && item.value !== undefined) {
        if (item.name === e.target.name) {
          item.name = e.target.name
          item.value = e.target.value
        }
      }
      return item;
    });

    // update form state with the new values
    setFormState(newFormState);
  }

  // function to submit data of the form
  async function onSubmit(e) {
    e.preventDefault();

    let bodyData = {};
    formState.map(function (item) {
      if (item.name !== undefined && item.value !== undefined) {
        bodyData[item.content] = item.value
      }
    })
    await api.user.sendEmails(bodyData);
  }

  return (
    <Form method='POST' state={formState} onChangeEvent={onChange} onSubmitEvent={onSubmit} />
  );
}

