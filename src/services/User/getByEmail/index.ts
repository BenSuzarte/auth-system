import prisma from "@/prisma"

class GetUserByEmail {
  async handle(email: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return { status: 404 }
    }
    return { status: 200,  user: user }
  }
}

export default new GetUserByEmail();