import { Routes } from "@/routes/Router";

class UserRouter extends Routes {

  constructor() {
    super();
    this.path = "/user";
    
    /* Place all routes types of this system */
    this.getRoutes();
    this.postRoutes();
  }

  /* Place all GET routes of this system */
  getRoutes() {
    this.getAll();
  }

  /* Place all POST routes of this system */
  postRoutes() {
    this.create();
  }
  
  /* Place all routes of this system */
  /* Obs¹: Remember of put new route in the right section */
  getAll() { this.router.get(this.path, (req, res) => res.send(200)) }
  create() { this.router.post(this.path, (req, res) => res.send(201)) }
}

export default new UserRouter().router;