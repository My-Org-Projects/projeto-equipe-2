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
       const usuario = new Usuario(usuarioExistente)

       let senhaCriptografada
       if (usuarioDto.senha != '') {
        senhaCriptografada = await this.cripto.criptografar(usuarioDto.senha)
       } else {
        senhaCriptografada = usuarioExistente.senha
       }
       
       
       const usuarioAlterado = new Usuario(
        {
            id: usuarioExistente.id,
            criadoEm: usuarioExistente.criadoEm,
            nome: usuarioDto.nome,
            email: usuarioDto.email,
            telefone: usuarioDto.telefone,
            token: usuarioDto.token,
            dataValidadeToken: usuarioDto.dataValidadeToken,
            senha: senhaCriptografada,  
            ativo: usuarioDto.ativo                     
        }
       )
       const novoUsuarioDto = new UsuarioDto(
        {
            id: usuarioAlterado.props.id,
            nome: usuarioAlterado.props.nome,
            email: usuarioAlterado.props.email,
            senha: usuarioAlterado.props.senha, 
            token: usuarioAlterado.props.token,
            dataValidadeToken: usuarioAlterado.dataValidadeToken.toISOStringSaoPaulo(),
            criadoEm: usuarioAlterado.props.criadoEm,
            ativo: usuarioAlterado.props.ativo     
        }
       )
       console.log(novoUsuarioDto.dataValidadeToken)
        await this.repo.salvar(novoUsuarioDto);
    }
}