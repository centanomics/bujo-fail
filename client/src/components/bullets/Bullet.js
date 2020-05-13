import React from 'react';

const Bullet = ({ bulletInfo: { name, type, date, priority } }) => {
  return (
    <li>
      <h1>{name}</h1>
    </li>
  );
};

export default Bullet;
