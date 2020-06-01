import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteBullet } from '../../actions/bulletActions';

const Bullet = ({
  bulletInfo: { id, name, type, date, priority },
  deleteBullet,
}) => {
  const onClick = () => {
    deleteBullet(id);
  };
  return (
    <li>
      <h1>{name}</h1>
      <button onClick={onClick}>Delete</button>
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
  deleteBullet: PropTypes.func.isRequired,
};

export default connect(null, { deleteBullet })(Bullet);
