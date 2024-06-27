import prisma from "@/prisma";

class GetAllUsers {
  async execute() {
    const users = await prisma.user.findMany();
    if(!users) {
      throw new Error("Erro interno para encontrar usuários");
    }

    return users
  }
}

export default new GetAllUsers();