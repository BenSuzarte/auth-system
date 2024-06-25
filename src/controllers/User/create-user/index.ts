import { Request, Response } from "express";
import  create from '@/services/User/create-user/index';
import { hash } from "bcryptjs";

class CreateUserController {
  async handle(req: Request, res: Response) {

    const { name, email, password} = req.body as { name: string, email: string, password: string }
    const hash_password = await hash(password, 8)

    const user = await create.execute( { name, email, hash_password } );

    res.send(user)
  }
}

export default new CreateUserController();