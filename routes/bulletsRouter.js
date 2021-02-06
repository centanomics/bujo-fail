const router = require('express').Router();

const auth = require('../middleware/auth');
const { getAllBullets } = require('../controllers/bullets');

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

// @route     PUT api/bullets/:id
// @desc      updates a bullet by its id
// @access    Private

// @route     DELETE api/bullets/:id
// @desc      deletes a bullet by its id
// @access    Private

module.exports = router;