import express from 'express';
import path from 'path';
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
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
