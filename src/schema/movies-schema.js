const notNullSchema = require('./not-null-schema');

module.exports = {
  getSchema: notNullSchema(['page', 'sortBy'], 'query'),
  putSchema: notNullSchema(['id', 'attribute', 'value'], 'body'),
  postSchema: notNullSchema(
    [
      'id',
      'title',
      'overview',
      'popularity',
      'posterPath',
      'releaseDate',
      'voteAverage',
    ],
    'body',
  ),
  deleteSchema: notNullSchema(['attribute', 'value'], 'body'),
};
