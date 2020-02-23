import express from 'express';
import routes from './routes';

// import sem retorno
import './database';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
