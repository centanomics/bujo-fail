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
    <li className="bullet">
      <div>
        <div>
          <span className="symbol">{type === 'task' ? '•' : type === 'event' ? '○' : '⁃'}</span>
          <h2>{name}</h2>
        </div>
        <div>
          <button onClick={onClick}>Delete</button>
          <button onClick={onEdit}><i className="far fa-edit"></i></button>
        </div>
      </div>
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
