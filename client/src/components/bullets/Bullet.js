import React from 'react';
import PropTypes from 'prop-types';

const Bullet = ({ bulletInfo: { name, type, date, priority } }) => {
  return (
    <li>
      <h1>{name}</h1>
    </li>
  );
};

// date should be instanceof(date)
Bullet.propTypes = {
  bulletInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['task', 'event', 'note']).isRequired,
    date: PropTypes.string.isRequired,
    priority: PropTypes.bool.isRequired,
  }),
};

export default Bullet;
