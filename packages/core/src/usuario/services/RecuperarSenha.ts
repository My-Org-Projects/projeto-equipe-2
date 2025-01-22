
import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import Usuario from "../model/Usuario";
import ProvedorCriptografia from "../provider/ProvedorCriptografia";
import RepositorioUsuario from "../provider/RepositorioUsuario";
import EditarUsuario from "./EditarUsuario";


export default class RecuperarSenha implements CasoDeUso<UsuarioDto,void> { 
   constructor(
           private readonly repo: RepositorioUsuario,   
           private readonly cripto: ProvedorCriptografia              
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
        
        editarUsuario.executar(usuarioDtoAlterado)
    }    
}