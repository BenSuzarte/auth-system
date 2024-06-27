import getByEmail from "@/services/User/get-by-email";
import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

class AuthController {
  async handle(req: Request, res: Response, ) {

    const { email, password } = req.body as { email: string, password: string };
    const isUser = await getByEmail.execute(email)

    if (!isUser) {
      return res.status(404).json({ message: "Usuário não encontrado no nosso banco de dados"})
    }

    const isValuePassword = await compare(password, isUser.password);

    if (!isValuePassword) {
      return res.status(400).json({ message: "Senha incorreta!" })
    }

    const tokenKey = process.env.TOKEN_KEY
    if (!tokenKey) {
      return
    }

    const token = sign({ id: isUser.id }, tokenKey, { expiresIn: "1d" })
    const { id } = isUser;

    return res.status(202).json({user: { id, email }, token})

  }
}

export default new AuthController();