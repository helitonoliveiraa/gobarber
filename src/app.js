const expess = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = expess();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(expess.json(routes));
  }

  routes() {
    this.server.use();
  }

}

export default new App().server;