import { Request, Response } from "express";
import  create from '@/services/User/create/index';
import getByEmail from "@/services/User/getByEmail/index"
import { hash } from "bcryptjs";

class CreateUserController {
  async handle(req: Request, res: Response) {

    const { name, email, password } = req.body as { name: string, email: string, password: string }
    const hash_password = await hash(password, 8)

    const userExists = getByEmail.handle(email);

    if((await userExists).status == 200) {
      return res.status(404).json({ message: "Usuário já foi cadastrado no nosso banco de dados"})
    }

    const user = await create.execute( { name, email, hash_password } );

    if (!user) {
      return res.status(404).json({ message: "Usuário não cadastrado no nosso banco de dados"})
    }

    res.status(201).json(user);
  }
}

export default new CreateUserController();