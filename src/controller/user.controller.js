const {
  responseValidator,
  hashPassword,
  checkPassword,
  generateAuthToken,
} = require('../utilities/methods');
const { User } = require('../models/index');

/**
 * Sign up user.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  const { salt, hashedPassword } = await hashPassword(password);

  const user = await User.createOne({
    email,
    salt,
    password: hashedPassword,
  });

  responseValidator(user, 'Signup Failed');
  const token = generateAuthToken('jwtPrivateKey', { _id: user.id });

  res.header('x-auth-token', token).send(user);
};

/**
 * Sign in user.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
    raw: true,
  });

  responseValidator(user, 'USER NOT FOUND');
  await checkPassword(password, user.password);
  const token = generateAuthToken('jwtPrivateKey', { _id: user.id });

  res.header('x-auth-token', token).send(user);
};
