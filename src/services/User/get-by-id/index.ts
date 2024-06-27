import prisma from "@/prisma";

class GetUserById {
  async execute(id: string) {
    const user = await prisma.user.findUnique({where: {id: id}})
    return user
  }
}

export default new GetUserById();