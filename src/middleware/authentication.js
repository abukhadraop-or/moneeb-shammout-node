const jwt = require('jsonwebtoken');
const config = require('config');
const BadRequest = require('../utilities/bad-request');

/**
 * Middleware for handling authentication for routs.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Gives the controls for next middleware.
 */
module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    throw new BadRequest('Access denied. No token provided', 401);
  }

  const decodedToken = jwt.verify(token, config.get('jwtPrivateKey'));
  req.user = decodedToken;

  next();
};
