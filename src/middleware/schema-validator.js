const { validationResult } = require('express-validator');

/**
 * Middleware for handling parameters validation.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Gives the controls for next middleware.
 */
module.exports = (req, res, next) => {
  const errorsList = validationResult(req);

  if (errorsList.isEmpty()) {
    return next();
  }

  return res.status(400).json(errorsList.array());
};
