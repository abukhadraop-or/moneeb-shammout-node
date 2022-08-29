const { body, query } = require('express-validator');

/**
 * Create array of not null chain fields.
 *
 * @param {Array.<string>} attributeList List of attributes in schema.
 * @param {string} type Body or query parameters.
 *
 * @return {Array.<import('express-validator').ValidationChain>} Validation list.
 */
module.exports = (attributeList, type) => {
  const chainType = type === 'body' ? body : query;

  return attributeList.map((attribute) =>
    chainType(attribute).exists({ checkFalsy: true }),
  );
};
