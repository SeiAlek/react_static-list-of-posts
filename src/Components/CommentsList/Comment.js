import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <>
    <div className="comment__author">
      <div className="comment__name">
        {name}
      </div>
      {' '}
      <a href={`mailto: ${email}`} className="comment__email">
        {email}
      </a>
    </div>
    <div className="comment__body">
      {body}
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
