import { Routes } from "@/routes/Router";
import getUsers from "@/controllers/User/get-users/index"
import createUser from "@/controllers/User/create/index"
import authUser from "@/controllers/User/auth/index"
import authMiddleware from "@/middlewares/auth"
import editUser from "@/controllers/User/edit/index"

class UserRouter extends Routes {

  constructor() {
    super();
    this.path = "/user";
    
    /* Place all routes types of this system */
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
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

  /* Place all PUT routes of this system */
  putRoutes() {
    this.edit();
  }
  
  /* Place all routes of this system */
  /* Obs¹: Remember of put new route in the right section */
  getAll() { this.router.get(this.path, authMiddleware.index, getUsers.handle) }
  edit() { this.router.put(this.path, authMiddleware.index, editUser.handle) }
  auth(path: string) { this.router.post(path, authUser.handle) }
  create() { this.router.post(this.path, createUser.handle) }
}

export default new UserRouter().router;