import prisma from "@/prisma";

class DeleteUserService {
  async execute(id: string) {
    const deletedUser = await prisma.user.delete({ where: { id } })
    return deletedUser
  }
}

export default new DeleteUser();