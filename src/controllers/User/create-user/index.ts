import { Request, Response } from "express";
import  create from '@/services/User/create-user/index';

class CreateUserController {
  async handle(req: Request, res: Response) {

    const user = await create.execute()
    res.send(user)

  }
}

export default new CreateUserController();