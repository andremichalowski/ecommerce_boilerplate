const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv").config(); //load env var
const userRoutes = require('./routes/user.js');

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server is running on port ${port}, at ${Date().toLocaleString()}`);
})
