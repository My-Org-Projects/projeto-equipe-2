
import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "../provider/RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso {
    constructor(
        private readonly repo: RepositorioUsuario,
       
    ) {    
    }
    
    async executar(usuarioDto: UsuarioDto): Promise<any> {
       
       //const usuarioExistente = await this.repo.buscarPorEmail(usuario.email.email) 
       //if (usuarioExistente) {
        // throw new Error('Usuário já existe')
       //}
       const usuario = new Usuario(usuarioDto)
       
       await this.repo.salvar( usuario )
    }
}