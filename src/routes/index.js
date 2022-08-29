const { AsyncRouter } = require('express-async-router');
const moviesRouter = require('./movies');
const usersRouter = require('./users');

const router = AsyncRouter();

router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

module.exports = router;
