const supertest = require('supertest');
const app = require('../server');
const { sequelize } = require('../models/index');

const user1 = {
  email: 'moneeb@gmail22.com',
  password: 'moneeb123',
};

describe('/users', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  describe('POST /signUp', () => {
    it('should succeed', async () => {
      const res = await supertest(app).post('/users/signUp').send(user1);
      expect(res.status).toBe(200);
    });
  });

  describe('POST /signUp ', () => {
    it('should fail user already exist', async () => {
      const res = await supertest(app).post('/users/signUp').send(user1);
      expect(res.status).toBe(400);
    });
  });

  describe('POST /signUp ', () => {
    it('should fail email is wrong', async () => {
      const res = await supertest(app).post('/users/signUp').send({
        email: 'moneeb@gmail22.com',
        password: 'moneeb123',
      });

      expect(res.status).toBe(400);
    });
  });

  describe('POST /signIn ', () => {
    it('should succeed', async () => {
      const res = await supertest(app).post('/users/signIn').send(user1);

      expect(res.status).toBe(200);
      return res;
    });
  });

  describe('POST /signIn ', () => {
    it('should fail user not found', async () => {
      const res = await supertest(app).post('/users/signIn').send({
        email: 'moneeb@gmaisdfsdfsdl22.com',
        password: 'moneeb123',
      });

      expect(res.status).toBe(400);
      return res;
    });
  });

  describe('POST /signIn ', () => {
    it('should fail wrong password', async () => {
      const res = await supertest(app).post('/users/signIn').send({
        email: 'moneeb@gmail22.com',
        password: 'moneeb888',
      });

      expect(res.status).toBe(400);
      return res;
    });
  });
});
