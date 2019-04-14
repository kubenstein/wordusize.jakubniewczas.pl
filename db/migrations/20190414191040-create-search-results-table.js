/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('search_results', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        url: Sequelize.STRING,
        word: Sequelize.STRING,
        count: Sequelize.INTEGER,

        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },

        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('search_results');
  }
}
