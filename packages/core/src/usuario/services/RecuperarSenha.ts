
import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import Usuario from "../model/Usuario";
import ProvedorCriptografia from "../provider/ProvedorCriptografia";
import ProvedorEmail from "../provider/ProvedorEmail";
import RepositorioUsuario from "../provider/RepositorioUsuario";
import EditarUsuario from "./EditarUsuario";

export default class RecuperarSenha implements CasoDeUso<UsuarioDto,void> { 
   constructor(
           private readonly repo: RepositorioUsuario,   
           private readonly cripto: ProvedorCriptografia,
           private readonly geradorEmail: ProvedorEmail,              
    ) {}
     
    async executar(usuarioDto: UsuarioDto): Promise<any> {
        const usuarioExistente = await this.repo.buscarPorEmail(usuarioDto.email) 
        
        if (! usuarioExistente) {
            throw new Error('E-mail não encontrado!')
        }
        
        const usuario = new Usuario(usuarioExistente); 
        const dataExpiracaoTokenTemporario = new Date();
        dataExpiracaoTokenTemporario.setMinutes(dataExpiracaoTokenTemporario.getMinutes() + 5)
     
        const editarUsuario = new EditarUsuario(this.repo, this.cripto)        
        
        const usuarioDtoAlterado = new UsuarioDto (
            {
                ...usuarioExistente,
                token: usuario.obterToken(),
                dataValidadeToken : dataExpiracaoTokenTemporario.toISOString()
            }
        )        
        
        await editarUsuario.executar(usuarioDtoAlterado)

        const urlNovaSenha = `http://localhost:3000/mudar-senha?token=${usuarioDtoAlterado.token}&email=${usuarioDtoAlterado.email}`
        const assunto='Recuperação de senha Sistema S3curity' 
        const mensagem = `
                            Prezado ${usuarioDtoAlterado.nome},<br>
                            Clique no link abaixo para acessar a página de alteração de senha:<br><br>
                            <a href="${urlNovaSenha}" target="_blank">Link para formulário de alteração de senha</a><br><br>
                            Atenção: a URL expirará em 5 minutos.
                        `;
        const email = usuarioDtoAlterado.email
        //console.log(email)
        await this.geradorEmail.enviarEmail(assunto,mensagem,email)
    }    
}