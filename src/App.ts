import express, { Application } from "express";

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send(200).json({ message: "Hello World" });
    });
  }
}

export default new App().app;