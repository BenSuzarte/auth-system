import { Router } from "express";

export class Routes {
  router: Router;
  path: string;

  constructor() {
    this.router = Router();
    this.path = "/";
  }
}