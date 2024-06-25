import prisma from "@/prisma";
import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

class AuthMiddleware {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body as { email: string, password: string };
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado no nosso banco de dados"})
    }

    const isValuePasswoord = await compare(password, user.password);

    if (!isValuePasswoord) {
      return res.status(400).json({ message: "Senha incorreta!" })
    }

    const token = sign({ id: user.id }, "secret", { expiresIn: "1d" })

    return res.status(202).json({ user, token })

  }
}

export default new AuthMiddleware();