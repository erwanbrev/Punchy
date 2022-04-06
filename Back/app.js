require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const auth = require('./routes/auth');
const user = require('./routes/user');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/auth', auth);
app.use('/user', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
