/* eslint-disable no-unused-vars */
const winston = require('winston');

/**
 * Middleware for handling errors during request processing.
 *
 * @param {object} err Error object.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Gives the controls for next middleware.
 */
module.exports = (err, req, res, next) => {
  winston.error(err.message);

  res.status(err.statusCode ?? 400).json({
    msg: err.message,
    success: false,
  });
};
