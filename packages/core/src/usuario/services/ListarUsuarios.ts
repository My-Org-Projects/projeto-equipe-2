import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import RepositorioUsuario from "../provider/RepositorioUsuario";

export default class ListarUsuarios implements CasoDeUso<void, UsuarioDto[] > {
    constructor(
        private readonly repo: RepositorioUsuario,              
    ) {}
    
    async executar(): Promise< UsuarioDto[] > {
        try {          
        
        const usuarios = await this.repo.listarTodosUsuarios();        
        return usuarios       

    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        throw new Error('Erro ao buscar usuários'); // Lança o erro para ser tratado no Controller
      }        
    }
}