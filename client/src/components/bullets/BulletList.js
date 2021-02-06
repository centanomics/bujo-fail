import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BulletAddForm from './BulletAddForm';
import BulletEditForm from './BulletEditForm';
import Bullet from './Bullet';
import PreLoader from '../layout/PreLoader';

import { getBullets } from '../../actions/bulletActions';
import sortBullets from '../../utils/sortBullets'

const BulletList = ({ bullet: { bullets, loading, update }, getBullets }) => {
  
  useEffect(() => {
    getBullets();
    //eslint-disable-next-line
  }, []);

  if (loading || bullets === null) {
    return <PreLoader />;
  }

  const sortedBullets = sortBullets(bullets);

  // return (
  //   <div>
  //     {console.log(bullets)}
  //     {!update ? <BulletAddForm /> : <BulletEditForm />}
  //     <ul className="bullet-list">
  //       {bullets.map((bullet) => (
  //         <Bullet bulletInfo={bullet} key={bullet.id} />
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      {!update ? <BulletAddForm /> : <BulletEditForm />}
      <ul className="bullet-list-date">
        {sortedBullets.map((sortedBullet, index) => (
          <li key={sortedBullet.date} className="bullet-date">
            <h3>{sortedBullet.date}</h3>
            <ul className="bullet-list">
              {sortedBullet.bullets.map((bullet) => (
                <Bullet bulletInfo={bullet} key={bullet.id} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
};

BulletList.propTypes = {
  bullet: PropTypes.shape({
    bullets: PropTypes.array,
    loading: PropTypes.bool.isRequired,
  }),
  getBullets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bullet: state.bullet,
});

export default connect(mapStateToProps, { getBullets })(BulletList);
