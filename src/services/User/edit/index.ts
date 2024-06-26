import { IEditUser } from "@/models/User/edit";
import prisma from "@/prisma";

class EditUserService {
  async execute(body: IEditUser) {
    if (!body) {
      throw new Error("Erro interno");
    }
  
    const fieldToUpdate = body.fieldToUpdate as keyof IEditUser;
  
    const user = await prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        [fieldToUpdate]: body[fieldToUpdate],
      },
    });

    if(!user) {
      throw new Error("Erro ao editar usuário")
    }

    return user
  }
}

export default new EditUserService();
