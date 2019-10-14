// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import {FormInformation} from "./FormInformation";
import './MoreInformation.css';


export function MoreInformation(){
    const _formInformations = [
        {
          type: 1,
          title: 'MAS INFORMACIÓN',
          subtitle:'E-mail'
         
        }
      ];

    return(
            <section className="moreInformation">
                <div className="moreInformation_info">
                    {_formInformations.map((form) =>
                    < FormInformation
                        key = {_formInformations.indexOf(form)}
                        type = {_formInformations.type}
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
   
  }
