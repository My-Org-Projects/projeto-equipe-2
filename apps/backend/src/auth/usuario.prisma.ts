import { Injectable } from '@nestjs/common';
import { RepositorioUsuario, UsuarioDto, Usuario } from '@projetoequipe2/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsuarioPrisma implements RepositorioUsuario {
  constructor(private readonly prisma: PrismaService) {}

  // async salvar(usuario: Usuario): Promise<void> {
  //   await this.prisma.usuario.upsert({
  //     where: { id: usuario.props.id ?? '' },
  //     update: usuario.clone(usuario.props),
  //     create: {
  //       id: usuario.id.valor,
  //       nome: usuario.props.nome,
  //       email: usuario.props.email,
  //     },
  //   });
  // }

  async salvar(usuario: Usuario): Promise<void> {
    const usuarioDto = new UsuarioDto({
      id: usuario.props.id,
      nome: usuario.props.nome, // Passando apenas algumas propriedades que você quer
      email: usuario.props.email, // Exemplo de outra propriedade
      // Aqui você pode adicionar outras propriedades conforme necessário
    });
    await this.prisma.usuario.upsert({
      where: { id: usuarioDto.id ?? '' },
      update: usuarioDto,
      create: usuarioDto,
    });
  }

  //async buscarPorEmail(email: string): Promise<any> {
  //return this.prisma.usuario.findUnique({
  //where: { email },
  //});
  //}
}
