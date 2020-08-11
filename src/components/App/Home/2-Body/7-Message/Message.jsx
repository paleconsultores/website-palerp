//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import './Message.css';

export default function Message({children = 'lorem'}) {
  return (
    <div className="message">
      <p className="message__paragraph">{children}</p>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.string
}