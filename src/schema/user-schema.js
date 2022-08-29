const { body } = require('express-validator');
const notNullSchema = require('./not-null-schema');

const emailSchema = body('email').isEmail();

module.exports = [emailSchema, notNullSchema(['password'], 'body')];
