import { Body, Controller, Post } from '@nestjs/common';
import {
  LoginUsuario,
  RegistrarUsuario,
  UsuarioDto,
} from '@projetoequipe2/core';
import { UsuarioPrisma } from './usuario.prisma';
import * as jwt from 'jsonwebtoken';
import { BcryptProvider } from './bcrypt.provider';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly repo: UsuarioPrisma,
    private readonly cripto: BcryptProvider,
  ) {}

  // @Post('login')
  // async login() {
  //   return 'login';
  // }

  @Post('login')
  async login(@Body() dados: { email: string; senha: string }) {
    const casoDeuUso = new LoginUsuario(this.repo, this.cripto);
    const usuario = await casoDeuUso.executar({
      email: dados.email,
      senha: dados.senha,
    });
    const segredo = process.env.JWT_SECRET;
    return jwt.sign(usuario, segredo, {
      expiresIn: '15d',
    });
  }
  // @Post('registrar')
  // async registrar(@Body() usuario: Usuario) {
  //   const casoDeUso = new RegistrarUsuario(this.repo);
  //   return await casoDeUso.executar(usuario);
  // }

  @Post('registrar')
  //async registrar(@Body() usuarioDto: { nome: string; email: string }) {
  async registrar(@Body() usuarioDto: UsuarioDto) {
    // const usuario = new Usuario({
    //   nome: usuarioDto.nome,
    //   email: usuarioDto.email,
    // });
    const casoDeUso = new RegistrarUsuario(this.repo, this.cripto);
    return await casoDeUso.executar(usuarioDto);
  }
}
