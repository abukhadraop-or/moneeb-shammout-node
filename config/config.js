module.exports = {
  development: {
    username: 'postmoneeb',
    password: 'shammout123',
    database: 'movies',
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: 'postmoneeb',
    password: 'shammout123',
    database: 'testdb',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
