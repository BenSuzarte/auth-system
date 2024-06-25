import express, { Application } from "express";
import userRouter from "@/routes/User/user"

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
    this.app.use(userRouter)
  }
}

export default new App().app;