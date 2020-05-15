import React from 'react';

const BulletAddForm = () => {
  return (
    <form>
      <select>
        <option>* Task</option>
        <option>o Event</option>
        <option>- Note</option>
      </select>
      <input type='text' />
      <input type='checkbox' />
      <button type='submit'>Add Bullet</button>
    </form>
  );
};

export default BulletAddForm;
