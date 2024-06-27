import prisma from "@/prisma";

class GetUserByEmail {
  async execute(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user
  }
}

export default new GetUserByEmail();