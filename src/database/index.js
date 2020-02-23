import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User]; // todos os models da aplicação

class Database {
  constructor() {
    this.init();
  }

  // Este método init() faz a conexão com a base de dados
  init() {
    this.connection = new Sequelize(databaseConfig);

    // passando a conexão para todas os models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
