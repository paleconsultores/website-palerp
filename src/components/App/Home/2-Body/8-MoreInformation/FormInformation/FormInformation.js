// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import './FormInformation.css';


export function FormInformation(
    { 
      type = 1,
      title = 'lorem', 
      subtitle='subtitle'
    }) 
  {
    if (type === 1) {
    return(
            <div className="formInformation">
            
                    <h2>{title}</h2> 
                    <form>
                        <div>
                            <label className="formInformation_formlabel" for="email">{subtitle}:</label>
                            <div>
                                <input className="formInformation_input" type="email" id="email" />
                            </div>
                     
                        </div>

                        <div className="formInformation_divbutton">
                            <button className="formInformation_formbutton" type="submit">Enviar</button>
                        </div>
                    </form>

            </div>

        );
    }
}
FormInformation.propTypes = {
    type: PropTypes.number,
    serviceClass: PropTypes.string,
    title: PropTypes.string,
    subtitle:PropTypes.string
   
  }
