import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteBullet, editBullet } from '../../actions/bulletActions';

const Bullet = ({ bulletInfo, deleteBullet, editBullet }) => {
  const { id, name, type } = bulletInfo;
  const onClick = () => {
    deleteBullet(id);
  };
  const onEdit = () => {
    editBullet(bulletInfo);
  };
  return (
    <li className={`bullet-${type}`}>
      <h1>{name}</h1>
      <button onClick={onClick}>Delete</button>
      <button onClick={onEdit}>Update</button>
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

export default connect(null, { deleteBullet, editBullet })(Bullet);
