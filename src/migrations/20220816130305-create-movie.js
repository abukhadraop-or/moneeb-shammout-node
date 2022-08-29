module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'movie',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        overview: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        popularity: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        poster_path: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        release_date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vote_average: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'created_at',
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'updated_at',
        },
      },
      {
        timestamps: true,
        underscored: true,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('movie');
  },
};
