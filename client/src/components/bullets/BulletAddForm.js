import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBullet } from '../../actions/bulletActions';

const BulletAddForm = ({ addBullet }) => {
  const [bullet, setBullet] = useState({
    name: '',
    type: 'task',
    priority: false,
  });

  const { name, type, priority } = bullet;

  const onChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setBullet({ ...bullet, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    bullet.date = Date.now().toString();
    bullet.id = uuidv4();
    addBullet(bullet);
    setBullet({
      name: '',
      type: 'task',
      priority: false,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <select value={type} onChange={onChange} name='type'>
        <option value='task'> Task</option>
        <option value='event'> Event</option>
        <option value='note'> Note</option>
      </select>
      <input type='text' value={name} onChange={onChange} name='name' />
      <input
        type='checkbox'
        checked={priority}
        onChange={onChange}
        name='priority'
      />
      <button type='submit'>Add Bullet</button>
    </form>
  );
};

BulletAddForm.propTypes = {
  addBullet: PropTypes.func.isRequired,
};

export default connect(null, { addBullet })(BulletAddForm);
