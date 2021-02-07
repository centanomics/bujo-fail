const router = require('express').Router();
const { check } = require('express-validator');

const auth = require('../middleware/auth');
const { getAllBullets, addBullet } = require('../controllers/bullets');

// @route     GET api/bullets/
// @desc      gets all bullets for userId
// @access    Private
router.get('/', auth, getAllBullets);

// @route     GET api/bullets/:id
// @desc      gets one bullet by id
// @access    Private

// @route     POST api/bullets/
// @desc      adds a bullet
// @access    Private
router.post('/', [
  auth,
  [
    check('name', 'Make sure bullet list isn\'t empty!')
      .notEmpty()
  ]
], addBullet);

// @route     PUT api/bullets/:id
// @desc      updates a bullet by its id
// @access    Private

// @route     DELETE api/bullets/:id
// @desc      deletes a bullet by its id
// @access    Private

module.exports = router;