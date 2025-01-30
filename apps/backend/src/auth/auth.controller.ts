import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  EditarUsuario,
  LoginUsuario,
  RecuperarSenha,
  RegistrarUsuario,
  UsuarioDto,
  AlterarSenhaEsquecida,
  ListarUsuarios
} from '@projetoequipe2/core';
import { UsuarioPrisma } from './usuario.prisma';
import * as jwt from 'jsonwebtoken';
import { BcryptProvider } from './bcrypt.provider';
import { MailerSendProvider } from './mailerSend.provider';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly repo: UsuarioPrisma,
    private readonly cripto: BcryptProvider,
    private readonly geradorEmail: MailerSendProvider,
  ) {}
  
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

  @Post('registrar')  
  async registrar(@Body() usuarioDto: UsuarioDto) {       
    const casoDeUso = new RegistrarUsuario(this.repo, this.cripto);
    return await casoDeUso.executar(usuarioDto);
  }

  @Post('editar')
  //async registrar(@Body() usuarioDto: { nome: string; email: string }) {
  async editar(@Body() usuarioDto: UsuarioDto) {    
    const casoDeUso = new EditarUsuario(this.repo, this.cripto);
    return await casoDeUso.executar(usuarioDto);
  }

  @Post('recuperarSenha')  
  async recuperarSenha (@Body() usuarioDto: UsuarioDto, @Res() res: Response) {
    const casoDeUso = new RecuperarSenha(this.repo, this.cripto, this.geradorEmail);
    await casoDeUso.executar(usuarioDto);
    const resposta = res.status(201).json({ statusCode: 201, message:'E-mail enviado com sucesso'})
    return resposta 
  }

  @Post('alterarSenhaEsquecida')  
  async alterarSenhaEsquecida (@Body() usuarioDto: UsuarioDto, @Res() res: Response) {
    const casoDeUso = new AlterarSenhaEsquecida(this.repo, this.cripto);
    await casoDeUso.executar(usuarioDto);
    const resposta = res.status(201).json({ statusCode: 201, message:'Senha alterada com sucesso'})
    return resposta 
  }

  @Get('listarTodosUsuarios')  
  async listarTodosUsuarios(@Res() res: Response) {
    try {

      const casoDeUso = new ListarUsuarios(this.repo);
  
      const usuarios = await casoDeUso.executar();     
      const usuarioParcial = usuarios.map(({ senha,token,dataValidadeToken, ...resto }) => resto);
  
      return res.status(200).json({
        success: true,
        totalUsuarios: usuarioParcial .length,
        usuarios: usuarioParcial 
      }) 

    } catch (error) {      
      return res.status(500).json({
        success: false,
        message: 'Erro ao listar usuários',
        error: error.message
      })
    }
  }
}