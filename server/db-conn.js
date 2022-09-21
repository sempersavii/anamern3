require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const { DB_CONN, DB_USER, DB_PW } = process.env;

mongoose
  .connect(DB_CONN, {
    auth: { username: DB_USER, password: DB_PW },
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      'Successfully connected to the DB through the power of magic...'
    )
  )
  .catch(console.error);
