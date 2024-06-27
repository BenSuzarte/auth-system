import { Request, Response } from "express";
import getAll from "@/services/User/get-all"

class GetUsersController {
  async handle(req: Request, res: Response) {
    const users = await getAll.execute();
    
    if(users.length === 0) {
      return res.status(200).json({ message: "Não há usuários cadastrados", users: users })
    }

    return res.status(200).json({users: users})

  }
}

export default new GetUsersController();