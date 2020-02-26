import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File]; // todos os models da aplicação

class Database {
  constructor() {
    this.init();
  }

  // Este método init() faz a conexão com a base de dados
  init() {
    this.connection = new Sequelize(databaseConfig);

    // passando a conexão para todas os models
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
