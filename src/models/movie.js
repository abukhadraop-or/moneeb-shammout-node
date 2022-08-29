const { DataTypes } = require('sequelize');
const BaseModel = require('../service/base-model');

class Movie extends BaseModel {}

module.exports = (sequelize) => {
  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      popularity: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      posterPath: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'poster_path',
      },
      releaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'release_date',
      },
      voteAverage: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'vote_average',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'movie',
      freezeTableName: true,
      timestamps: true,
      underscored: true,
    },
  );

  return Movie;
};
