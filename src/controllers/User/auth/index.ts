import prisma from "@/prisma";
import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

class AuthController {
  async handle(req: Request, res: Response, ) {

    const { email, password } = req.body as { email: string, password: string };
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado no nosso banco de dados"})
    }

    const isValuePasswoord = await compare(password, user.password);

    if (!isValuePasswoord) {
      return res.status(400).json({ message: "Senha incorreta!" })
    }

    const tokenKey = process.env.TOKEN_KEY
    if (!tokenKey) {
      return
    }

    const token = sign({ id: user.id }, tokenKey, { expiresIn: "1d" })
    const { id } = user;

    return res.status(202).json({user: { id, email }, token})

  }
}

export default new AuthController();