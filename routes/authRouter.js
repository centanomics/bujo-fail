const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send({ lol: 'hi' });
});

// @route     GET api/auth
// @desc      gets logged in user
// @access    Private

// @route     POST api/auth/login
// @desc      auths a user and gets token
// @access    Public

// @route     POST api/auth/register
// @desc      registers a user and then logs them in
// @access    Public

module.exports = router;
