module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
      id: {
        type: Sequelize.INTEGER,
        allowNulll: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNulll: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNulll: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNulll: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNulll: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('files');
  },
};
