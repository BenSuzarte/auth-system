import { Request, Response } from "express";
import { hash } from "bcryptjs";
import getByEmail from "@/services/User/get-by-email";
import create from "@/services/User/create";

class CreateUserController {
  async handle(req: Request, res: Response) {

    const { name, email, password } = req.body as { name: string, email: string, password: string }
    const hash_password = await hash(password, 8)

    const userExists = await getByEmail.execute(email)

    if(userExists) {
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