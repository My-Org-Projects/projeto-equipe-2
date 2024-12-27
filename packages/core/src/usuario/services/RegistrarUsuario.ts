import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import Usuario from "../model/Usuario";
import ProvedorCriptografia from "../provider/ProvedorCriptografia";
import RepositorioUsuario from "../provider/RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso<UsuarioDto,void> {
    constructor(
        private readonly repo: RepositorioUsuario,
        private readonly cripto: ProvedorCriptografia       
    ) {}
    
    async executar(usuarioDto: UsuarioDto): Promise<any> {
       
       const usuarioExistente = await this.repo.buscarPorEmail(usuarioDto.email) 
       if (usuarioExistente) {
        throw new Error('Usuário já existe')
       }
       
       const senhaCriptografada = await this.cripto.criptografar(usuarioDto.senha)
       const novoUsuario = new Usuario(
        {
            nome: usuarioDto.nome,
            email: usuarioDto.email,
            senha: senhaCriptografada,           
        }
       )
       const novoUsuarioDto = new UsuarioDto(
        {
            ...usuarioDto,
            id: novoUsuario.props.id,
            senha: novoUsuario.props.senha,   
        }
       )
        
        await this.repo.salvar(novoUsuarioDto);
    }
}