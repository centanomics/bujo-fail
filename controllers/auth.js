const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const Users = require('../models/users');

// register user

exports.registerUser = async (req, res) => {
  // if there are errors in the input, returns those errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password } = req.body;

  try {
    // checks to see if the user exists
    let user = await Users.find({ email })
    console.log(user)
    if (user) {
      return res.status(400).json({msg: 'User already exist'})
    }

    let salt = bcrypt.genSaltSync(10);
    user = new Users({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, salt),
    })
    console.log(user)


    res.status(200).json({msg: 'hi'})
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}