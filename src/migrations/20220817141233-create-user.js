module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'user',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        salt: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('user');
  },
};
