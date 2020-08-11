// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import FormInformation from "./FormInformation/FormInformation";
import './MoreInformation.css';


export default function MoreInformation(){
    const _formInformations = [
        {
          type: 1,
          title: 'MAS INFORMACIÓN',
          subtitle:'E-mail'
         
        }
      ];
  return(
    <section id="MoreInformation" className="moreInformation">
      <div className="moreInformation_info">
        {_formInformations.map((form) =>
          <FormInformation
            key = {_formInformations.indexOf(form)}
            type = {form.type}
            title = {form.title}
            subtitle={form.subtitle}
          />
        )}
      </div>
    </section>
  );
}

MoreInformation.propTypes = {
    type: PropTypes.number,
    serviceClass: PropTypes.string,
    title: PropTypes.string,
    subtitle:PropTypes.string
};
