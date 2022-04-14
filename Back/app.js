require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const auth = require('./routes/auth');
const user = require('./routes/user');
const event = require('./routes/event');
const housing = require('./routes/housing');
const carpooling = require('./routes/carpooling');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/auth', auth);
app.use('/user', user);
app.use('/event', event);
app.use('/housing', housing);
app.use('/carpooling', carpooling);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
