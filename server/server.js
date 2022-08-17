require('express-async-errors');
const express = require('express');
const cors = require('cors');
const winston = require('winston');
const errorSubscriber = require('./utilities/error-subscriber');
const errorHandler = require('./middleware/error-handler');
const moviesRouter = require('./routes/movies');

const app = express();

winston.add(new winston.transports.File({ filename: 'errorLog.log' }));
errorSubscriber('uncaughtException');
errorSubscriber('unhandledRejection');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', moviesRouter);

app.use(errorHandler);

// app.get('/', async (req, res) => {

// });
app.listen(3000, () => {
  console.log('Server started port:3000');
});
