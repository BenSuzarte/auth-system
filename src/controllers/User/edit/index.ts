import { Request, Response } from "express";
import getByEmail from "@/services/User/getByEmail";
import edit from "@/services/User/edit/index";

class EditUserController {
  async handle(req: Request, res: Response) {

    const { id, name, email, password, fieldToUpdate } = req.body;
    const isUser = await getByEmail.handle(email);
    
    if(isUser.status === 400) {
      return res.status(404).json({ message: "Erro ao encontrar o usuário" })
    }

    const updatedUser = edit.execute({ id, name, email });

    if(!updatedUser) {
      return res.status(400).json({ message: "Erro ao editar o usuário" });
    }

    return res.status(201).json({ message: "Usuário editado com sucesso", updatedUser })

  }
}

export default new EditUserController();