import { Request, Response } from "express";
import edit from "@/services/User/edit/index";
import getById from "@/services/User/get-by-id";

class EditUserController {
  async handle(req: Request, res: Response) {

    const { id, name, email, password, fieldToUpdate } = req.body;
    const isUser = await getById.execute(id)
    
    if(!isUser) {
      return res.status(404).json({ message: "Erro ao encontrar o usuário" })
    }

    const updatedUser = await edit.execute({ id, name, email });

    if(!updatedUser) {
      return res.status(400).json({ message: "Erro ao editar o usuário" });
    }

    return res.status(201).json({ message: "Usuário editado com sucesso", user: updatedUser })

  }
}

export default new EditUserController();