/**
 * Overriding Error class to handel api errors.
 */
class BadRequest extends Error {
  constructor(message, code) {
    super(message);
    this.statusCode = code ?? 400;
  }
}

module.exports = BadRequest;
