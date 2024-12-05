import UsuarioDto from "../model/Usuario";

export default interface RepositorioUsuario {
    salvar(usuarioDto: UsuarioDto) : Promise<void>
    //buscarPorEmail(email: string) : Promise<any>
}