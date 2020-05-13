import React from 'react';

import BulletAddForm from './BulletAddForm';
import Bullet from './Bullet';

const BulletList = () => {
  const bullets = [
    {
      _id: '2fe0f156-1cef-420f-b210-46bbdb2f4a88',
      userId: 'a52af12a-426e-4295-bad3-cb00313f8b31',
      name: 'Do Laundry',
      type: 'Task',
      date: '2019-04-28',
      priority: false,
    },
    {
      _id: 'ca251245-3c6f-4144-8b49-ddd3e3e59bc0',
      userId: 'a52af12a-426e-4295-bad3-cb00313f8b31',
      name: 'Final Exam for Bio',
      type: 'Event',
      date: '2019-04-27',
      priority: true,
    },
    {
      _id: 'c4084371-f3b6-4a6f-ad6f-5ee4d009e367',
      userId: 'a52af12a-426e-4295-bad3-cb00313f8b31',
      name: 'idk what to put here',
      type: 'Note',
      date: '2019-04-28',
      priority: false,
    },
    {
      _id: '99922729-d0b8-4ffa-bc0f-8f4b57ac968b',
      userId: 'f3478aa7-d627-454b-9ccb-8a41f0a1d0e5',
      name: 'Do Laundry',
      type: 'Task',
      date: '2019-04-28',
      priority: false,
    },
  ];

  return (
    <div>
      <BulletAddForm />
      <ul>
        {bullets.map((bullet) => (
          <Bullet bulletInfo={bullet} />
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
