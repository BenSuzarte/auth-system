import { ICreateUser } from "@/models/User/create-user";
import prismaClient from "@/prisma/index";

class CreateUserService {
  async execute({ name, email, hash_password }: ICreateUser) {
    
    if(!name || !email || !hash_password) {
      throw new Error("Campos não preenchidos")
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hash_password,
        status: true
      }
    })

    return user
  }
}

export default new CreateUserService();