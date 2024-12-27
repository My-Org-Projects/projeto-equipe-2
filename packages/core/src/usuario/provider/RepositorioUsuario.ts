//import UsuarioDto from "../model/Usuario";

import UsuarioDto from "../dtos/UsuarioDto"

export default interface RepositorioUsuario {
    salvar(usuarioDto: UsuarioDto) : Promise<void>
    buscarPorEmail(email: string) : Promise<any>
}