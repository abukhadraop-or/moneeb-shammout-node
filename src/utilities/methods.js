const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const BadRequest = require('./bad-request');

/**
 * Validate response object.
 *
 * @param {object} response Object to check.
 * @param {string} description Error description.
 */
const responseValidator = (response, description) => {
  if (!response || (Array.isArray(response) && !response[0])) {
    throw new BadRequest(description);
  }
};

/**
 * Convert response object to JSON.
 *
 * @param {string} password Password to be hashed.
 *
 * @return {object.<string>} Salt and hashed password.
 */
const hashPassword = async (password) => {
  if (password.length < 8) {
    throw new BadRequest('MINIMUM PASSWORD 8 CHARACTERS');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return {
    salt,
    hashedPassword,
  };
};

/**
 * Authenticates user by checking the password with the salt.
 *
 * @param {string} password Password to compare.
 * @param {string} hashedPassword Password stored in the database.
 */
const checkPassword = async (password, hashedPassword) => {
  const valid = await bcrypt.compare(password, hashedPassword);

  if (!valid) {
    throw new BadRequest('PASSWORD INCORRECT');
  }
};

/**
 * Generates JWT token.
 *
 * @param {string} privateKey Name of private key.
 * @param {object} credentials Credentials to sign for JWT.
 *
 * @return {string} Token.
 */
const generateAuthToken = (privateKey, credentials) => {
  if (!config.has(privateKey)) {
    throw new BadRequest('NO JWT PRIVATE KEY');
  }

  return jwt.sign(credentials, config.get(privateKey));
};

module.exports = {
  checkPassword,
  responseValidator,
  hashPassword,
  generateAuthToken,
};
