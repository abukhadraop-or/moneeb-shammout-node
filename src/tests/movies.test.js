const supertest = require('supertest');
const app = require('../server');
const { sequelize } = require('../models/index');

const movie1 = {
  id: 1,
  overview: 'dummy movie',
  popularity: 1370.175,
  posterPath: 'dummy Poster',
  releaseDate: '2022-07-29',
  title: 'Purple Hearts',
  voteAverage: 8.6,
};

const token1 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjA4MTYxNzl9.iuWD9fHtFhGdv0am-25KsBFrWxzsWBN8X_Kxb18mehg';

describe('/movies', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  describe('Get /movies/page&:sortBy', () => {
    it('should succeed', async () => {
      const res = await supertest(app).get(
        '/movies?page=1&sortBy=popularity.desc',
      );
      expect(res.status).toBe(200);
    });
  });

  describe('POST /movies ', () => {
    it('should create movie', async () => {
      const res = await supertest(app)
        .post('/movies')
        .set({
          'x-auth-token': token1,
        })
        .send(movie1);
      expect(res.status).toBe(200);
    });
  });

  describe('POST /movies ', () => {
    it('should fail access denied', async () => {
      const res = await supertest(app).post('/movies').send(movie1);
      expect(res.status).toBe(401);
    });
  });
});
