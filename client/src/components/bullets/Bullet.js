import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaEdit, FaTrashAlt} from 'react-icons/fa'

import { deleteBullet, editBullet } from '../../actions/bulletActions';

const Bullet = ({ bulletInfo, deleteBullet, editBullet }) => {
  const { _id, name, type, priority } = bulletInfo;
  const onClick = () => {
    deleteBullet(_id);
  };
  const onEdit = () => {
    editBullet(bulletInfo);
  };
  return (
    <li className="bullet">
      <div>
        <div>
          <span className={`symbol ${!priority ? 'symbol-priority' : ''}`}>!</span>
          <span className="symbol">{type === 'task' ? '•' : type === 'event' ? '○' : '⁃'}</span>
          <h2>{name}</h2>
        </div>
        <div>
          <button onClick={onClick}><FaTrashAlt /></button>
          <button onClick={onEdit}><FaEdit /></button>
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
