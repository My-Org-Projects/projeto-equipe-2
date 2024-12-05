import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarUsuario, UsuarioDto } from '@projetoequipe2/core';
import { UsuarioPrisma } from './usuario.prisma';

@Controller('auth')
export class AuthController {
  constructor(private readonly repo: UsuarioPrisma) {}

  @Post('login')
  async login() {
    return 'login';
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
    const casoDeUso = new RegistrarUsuario(this.repo);
    return await casoDeUso.executar(usuarioDto);
  }
}
