import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { UsuarioDto } from '@projetoequipe2/core';
import * as jwt from 'jsonwebtoken';
import { UsuarioPrisma } from './usuario.prisma';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly repo: UsuarioPrisma) {}

  async use(req: any, res: any, next: () => void) {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      console.log('token', token);

      if (!token) {
        throw new HttpException('Token não informado', 401);
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET!) as UsuarioDto;

      if (!payload) {
        throw new HttpException('Token inválido', 401);
      }

      const usuarioDto = await this.repo.buscarPorEmail(payload.email);
      delete usuarioDto.senha;
      console.log(usuarioDto.nome);
      req.usuarioDto = usuarioDto;

      next();
    } catch (error) {
      throw new HttpException('Token inválido', 401);
    }
  }
}
