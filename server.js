const log = require('debug')('server:log');
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const authRouter = require('./routes/authRouter');
const bulletsRouter = require('./routes/bulletsRouter');

const app = express();

app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/auth', authRouter);
app.use('/api/bullets', bulletsRouter);

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//Define Ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  log(`Server started on ${PORT}`);
  console.log(`Server started on ${PORT}`);
});
