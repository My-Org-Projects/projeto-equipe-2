import CasoDeUso from "../../shared/services/CasoDeUso"
import UsuarioDto from "../dtos/UsuarioDto"
import Usuario from "../model/Usuario"
import ProvedorCriptografia from "../provider/ProvedorCriptografia"
import RepositorioUsuario from "../provider/RepositorioUsuario"

export default class AlterarSenhaEsquecida implements CasoDeUso<UsuarioDto,void> {
    constructor(
        private readonly repo: RepositorioUsuario,
        private readonly cripto: ProvedorCriptografia       
    ) {}
    
    async executar(usuarioDto: UsuarioDto): Promise<any> {
       
       const usuarioExistente = await this.repo.buscarPorEmail(usuarioDto.email)        

       if (!usuarioExistente) {
        throw new Error('Usuário não existe')
       }
       const senhaCriptografada = await this.cripto.criptografar(usuarioDto.senha)    

       const usuario = new Usuario({
            ...usuarioExistente,
            senha:senhaCriptografada,
            criadoEm: usuarioExistente.criadoEm,
            dataValidadeToken: usuarioExistente.dataValidadeToken,
        }
       )  
      
       // Ajustar para o horário de São Paulo (UTC-3)
       const offset = -3 * 60 * 60000; // Brasília UTC-3
       const utcDate = new Date();
       const dataAgora = new Date(utcDate.getTime() + offset);
      
       if (!(usuarioDto.token === usuario.props.token)) {
            throw new Error('Token Inválido')
       } else {
        if (!(usuario.dataValidadeToken.comparar(dataAgora) > 0 )) {
            throw new Error('Token Expirado')
        }
       }   

       const usuarioDtoAlterado = new UsuarioDto ({
            ...usuarioExistente,
            senha: usuario.props.senha
         }
       )
    
        await this.repo.salvar(usuarioDtoAlterado);
    }
}