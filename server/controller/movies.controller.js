const fetch = require('node-fetch-commonjs');
const { Movie } = require('../database/models/index');
const BadRequest = require('../errors/bad-request');

const moviesAPI =
  'https://api.themoviedb.org/3/discover/movie/?api_key=1ed03abf259db3275f034b5a5abe9f9e&language=en-US';

/**
 * Creates a list of movies in the database.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.createPage = async (req, res) => {
  const { page } = req.body;
  if (page === undefined) {
    throw new BadRequest('no page provided');
  }
  const response = await fetch(
    `${moviesAPI}&sort_by=popularity.desc&page=${page}`,
  );
  const jsonData = await response.json();
  const movies = jsonData.results;
  const responseBulk = await Movie.bulkCreate(movies);
  res.send(responseBulk);
};

/**
 * Fetches a list of movies from the database.
 *
 * @param {Object} req  Request object.
 * @param {Object} res Response object.
 */
exports.getOnePage = async (req, res) => {
  const { page, sortBy } = req.params;
  const sortList = sortBy.split('.');

  const response = await Movie.findAll({
    offset: (page - 1) * 20,
    limit: 20,
    raw: true,
    order: [[sortList[0], sortList[1].toUpperCase()]],
  });
  const dataJson = JSON.stringify(response, null, 2);
  res.send(dataJson);
};
