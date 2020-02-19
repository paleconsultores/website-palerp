//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import './MessageSecond.css';

export  default function MessageSecond({children = 'lorem'}) {
  return (
    <div className="messageSecond">
      <p className="messageSecond__paragraph">{children}</p>
    </div>
  );
}

MessageSecond.propTypes = {
  children: PropTypes.string
}