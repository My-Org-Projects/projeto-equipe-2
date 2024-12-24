import { Controller, Get } from '@nestjs/common';
import { UsuarioDto } from '@projetoequipe2/core';
import { UsuarioLogado } from 'src/shared/usuario.decorator';

@Controller('administracao')
export class AdministracaoController {
  @Get()
  teste(@UsuarioLogado() usuarioDto:UsuarioDto) {
    return `Administração do ${usuarioDto.nome}`;
  }
}
