import { Injectable } from '@nestjs/common';
import { RepositorioUsuario, UsuarioDto, Usuario } from '@projetoequipe2/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsuarioPrisma implements RepositorioUsuario {
  constructor(private readonly prisma: PrismaService) {}  

  async salvar(usuarioDto: UsuarioDto): Promise<void> {    
    await this.prisma.usuario.upsert({
      where: { id: usuarioDto.id ?? '' },
      update: usuarioDto,
      create: usuarioDto,
    });
  }

  async buscarPorEmail(email: string): Promise<UsuarioDto | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async listarTodosUsuarios(): Promise<UsuarioDto[]> {
    const usuarios = await this.prisma.usuario.findMany();
    return usuarios.map(usuario => new UsuarioDto(usuario));
  }  
}
