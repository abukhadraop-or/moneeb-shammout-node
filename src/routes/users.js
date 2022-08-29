const { AsyncRouter } = require('express-async-router');
const { signIn, signUp } = require('../controller/user.controller');
const schemaValidator = require('../middleware/schema-validator');
const userSchema = require('../schema/user-schema');

const router = AsyncRouter();

router.post('/signIn', userSchema, schemaValidator, signIn);
router.post('/signUp', userSchema, schemaValidator, signUp);

module.exports = router;
