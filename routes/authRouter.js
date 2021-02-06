const router = require('express').Router();
const { check } = require('express-validator');

const { getUser, registerUser } = require('../controllers/auth');
const auth = require('../middleware/auth');

// @route     GET api/auth
// @desc      gets logged in user
// @access    Private
router.get('/', auth, getUser)

// @route     POST api/auth/login
// @desc      auths a user and gets token
// @access    Public

// @route     POST /api/auth/register
// @desc      registers a user and then logs them in
// @access    Public

router.post('/register', [
  check('firstName', 'Please include a First Name.')
    .not()
    .isEmpty(),
  check('lastName', 'Please include a Lirst Name.')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email.')
    .isEmail(),
  check('password', 'Please enter a password with 6 or more characters')
    .exists()
    .isLength({
      min: 6
    }),
  check('password2', 'Passwords must match')
    .custom((value, { req }) =>
      req.body.password2 === req.body.password
    )
], registerUser);

module.exports = router;
