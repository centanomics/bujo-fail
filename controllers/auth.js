const { validationResult } = require('express-validator');
const Users = require('../models/users');

// register user

exports.registerUser = async (req, res) => {
  // if there are errors in the input, returns those errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password, password2 } = req.body;

  try {
    let user = await Users.findOne({ email: email })
    if (user) {
      return res.status(400).json({msg: 'User already exist'})
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}