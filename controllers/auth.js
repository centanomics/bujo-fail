const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')

const Users = require('../models/users');

// get user

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select("-password");
    return res.status(200).json(user)
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('server error')
  }
}

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
    let user = await Users.findOne({ email })
    if (user) {
      return res.status(400).json({msg: 'User already exist'})
    }

    // creates user with hash
    let salt = bcrypt.genSaltSync(10);
    user = new Users({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, salt),
    })

    const payload = {
      user: {
        id: user.id
      }
    };

    await user.save();

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 36000
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    )

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

// login user

exports.loginUser = async (req, res) => {
  // if there are errors in the input, returns those errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // checks if email exists if it doesnt send back invalid email
    let user = await Users.findOne({ email })
    if (!user) {
      return res.status(400).json({msg: 'Invalid Email'})
    }

    // checks if the password matched the on in the database
    // if it doesnt it send back invalid email
    const isMatch = bcrypt.compareSync(password.toString(), user.password);
    if (!isMatch) {
      return res.status(400).json({msg: 'Invalid Password'})
    }

    const payload = {
      user: {
        id: user.id,
      }
    }

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 36000
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    )

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}