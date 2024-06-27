import prisma from "@/prisma";

class GetAllUsersService {
  async execute() {
    const users = await prisma.user.findMany();
    if(!users) {
      throw new Error("Erro interno para encontrar usuários");
    }

    return users
  }
}

export default new GetAllUsersService();