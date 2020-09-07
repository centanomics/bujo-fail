import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateBullet, cancelUpdate } from '../../actions/bulletActions';

const BulletEditForm = ({
  bullet: { current },
  updateBullet,
  cancelUpdate,
}) => {
  const [bullet, setBullet] = useState(current);

  const { name, type, priority } = bullet;

  const onChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setBullet({ ...bullet, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateBullet(bullet);
  };

  const cancelEdit = (e) => {
    cancelUpdate();
  };

  return (
    <form onSubmit={onSubmit} className='bulletForm'>
      <select value={type} onChange={onChange} name='type'>
        <option value='task'>Task</option>
        <option value='event'>Event</option>
        <option value='note'>Note</option>
      </select>
      <input
        type='text'
        value={name}
        onChange={onChange}
        name='name'
        autoFocus
      />
      <input
        type='checkbox'
        checked={priority}
        onChange={onChange}
        name='priority'
      />
      <button type='submit'>Update Bullet</button>
      <button type='button' onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
};

BulletEditForm.propTypes = {
  bullet: PropTypes.object.isRequired,
  updateBullet: PropTypes.func.isRequired,
  cancelUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bullet: state.bullet,
});

export default connect(mapStateToProps, { updateBullet, cancelUpdate })(
  BulletEditForm
);
