import { Routes } from "@/routes/Router";
import getUsers from "@/controllers/User/get-users/index"
import createUser from "@/controllers/User/create/index"
import authUser from "@/controllers/User/auth/index"

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
    this.auth(this.path + "/auth");
  }
  
  /* Place all routes of this system */
  /* Obs¹: Remember of put new route in the right section */
  getAll() { this.router.get(this.path, getUsers.handle) }
  create() { this.router.post(this.path, createUser.handle) }
  auth(path: string) { this.router.post(path, authUser.handle) }
}

export default new UserRouter().router;