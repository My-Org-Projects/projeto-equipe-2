import { EditarUsuario, ProvedorCriptografia } from "../../../dist";
import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "../provider/RepositorioUsuario";
import crypto from 'crypto'; // Para gerar tokens aleatórios

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
        
        const tokenTemporario = this.gerarToken()
        const dataExpiracaoTokenTemporario = new Date();
        const editarUsuario = new EditarUsuario(this.repo, this.cripto)

        dataExpiracaoTokenTemporario.setMinutes(dataExpiracaoTokenTemporario.getMinutes() + 15)        
        
        const usuarioDtoAlterado = new UsuarioDto (
            {
                ...usuarioExistente,
                //tokenTemporario: usuarioDto.tokenTemporario,
                //dataExpiradcaoTokenTemporario : usuarioDto.dataExpiracaoTokenTemporario
            }
        )
        
        editarUsuario.executar(usuarioDtoAlterado)
    }   

    private gerarToken(): string {
        return crypto.randomBytes(3).toString('hex'); // Gera 6 dígitos alfanuméricos (3 bytes)
      }
}