import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BulletAddForm from './BulletAddForm';
import BulletEditForm from './BulletEditForm';
import Bullet from './Bullet';
import PreLoader from '../layout/PreLoader';

import { getBullets } from '../../actions/bulletActions';

const BulletList = ({ bullet: { bullets, loading, update }, getBullets }) => {
  useEffect(() => {
    getBullets();
    //eslint-disable-next-line
  }, []);

  if (loading || bullets === null) {
    return <PreLoader />;
  }

  return (
    <div>
      {!update ? <BulletAddForm /> : <BulletEditForm />}
      <ul>
        {bullets.map((bullet) => (
          <Bullet bulletInfo={bullet} key={bullet.id} />
        ))}
      </ul>
    </div>
  );
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
