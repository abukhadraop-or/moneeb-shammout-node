const { AsyncRouter } = require('express-async-router');
const authHandler = require('../middleware/authentication');
const schemaValidator = require('../middleware/schema-validator');

const {
  getSchema,
  putSchema,
  postSchema,
  deleteSchema,
} = require('../schema/movies-schema');

const {
  getOnePage,
  updateMovie,
  createMovie,
  deleteMovie,
} = require('../controller/movies.controller');

const router = AsyncRouter();

router.get('/', getSchema, schemaValidator, getOnePage);
router.put('/', authHandler, putSchema, schemaValidator, updateMovie);
router.post('/', authHandler, postSchema, schemaValidator, createMovie);
router.delete('/', authHandler, deleteSchema, schemaValidator, deleteMovie);

module.exports = router;
