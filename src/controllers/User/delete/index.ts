import { Request, Response } from "express";
import deleteUser from "@/services/User/delete"
import getById from "@/services/User/get-by-id";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const isUser = await getById.execute(id);

    if(!isUser) {
      return res.status(400).json({ message: "Usuário não existe no nosso banco de dados" });
    }

    const deletedUser = await deleteUser.execute(id);

    if(!deletedUser) {
      return res.status(404).json({ message: "Erro ao deletar usuário" });
    }

    return res.status(200).json({ message: "Usuário deletado com sucesso", user: deletedUser });
  }
}

export default new DeleteUserController();