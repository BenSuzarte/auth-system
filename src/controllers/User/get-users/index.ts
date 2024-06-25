import { Request, Response } from "express";

class GetUsersController {
  handle(req: Request, res: Response) {
    res.send(200)
  }
}

export default new GetUsersController();