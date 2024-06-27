import { IEditUser } from '@/models/User/edit/index';
import prisma from "@/prisma";

class EditUserService {
  async execute(body: IEditUser) {
    const { id, name, email } = body

    const isUser = await prisma.user.findUnique({ where: { id: id } })

    if(!isUser) {
      throw new Error("Usuário não existe no nosso banco de dados")
    }

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name,
        email
      }
    })

    if (!updatedUser) {
      throw new Error("Erro ao editar seu usuário")
    }

    return updatedUser
  }
}

export default new EditUserService();
