import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.app = express();
    this.middlewares(); /* Declarar o muddlwares antes das rotas! */
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
