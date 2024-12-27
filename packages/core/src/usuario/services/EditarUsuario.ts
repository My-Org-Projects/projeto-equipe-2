import CasoDeUso from "../../shared/services/CasoDeUso";
import UsuarioDto from "../dtos/UsuarioDto";
import Usuario from "../model/Usuario";
import ProvedorCriptografia from "../provider/ProvedorCriptografia";
import RepositorioUsuario from "../provider/RepositorioUsuario";

export default class EditarUsuario implements CasoDeUso<UsuarioDto,void> {
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
       
       const usuarioAlterado = new Usuario(
        {
            id: usuarioExistente.id,
            nome: usuarioDto.nome,
            email: usuarioDto.email,
            senha: senhaCriptografada,           
        }
       )
       const novoUsuarioDto = new UsuarioDto(
        {
            id: usuarioAlterado.props.id,
            nome: usuarioAlterado.props.nome,
            email: usuarioAlterado.props.email,
            senha: usuarioAlterado.props.senha,           
        }
       )
        console.log(usuarioDto.senha)
        //console.log(novoUsuarioDto.nome)
        await this.repo.salvar(novoUsuarioDto);
    }
}