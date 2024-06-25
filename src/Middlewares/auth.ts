import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface ITokenPayLoad {
  id: string,
  iat: number,
  exp: number
}

class AuthMiddleware {
  index(
    req: Request,
    res: Response,
    next: NextFunction

  ) {

    const { authorization } = req.headers;

    if(!authorization) {
      return res.status(401).json( { error: "Token não identificado" } )
    }

    const [, token] = authorization.split(" ")

    try {
      const tokenKey = process.env.TOKEN_KEY
      if(!tokenKey) {
        return
      }

      const decoded = verify(token, tokenKey)
      const { id } = decoded as ITokenPayLoad;

      req.userId = id;

    } catch (error) {
      return res.status(401).json( { error: "Token inválido" } )
    }

  }
}