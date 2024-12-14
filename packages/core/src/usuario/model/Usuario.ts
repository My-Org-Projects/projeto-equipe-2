import Email from "../../shared/Email";
import Entidade, { EntidadeProps } from "../../shared/Entidade";
import NomePessoa from "../../shared/NomePessoa";

export interface UsuarioProps extends EntidadeProps {   
    nome?: string
    email: string
    senha?: string
}

export default class Usuario extends Entidade<Usuario, UsuarioProps > {
    readonly nome: NomePessoa
    readonly email: Email
    readonly senha: String

    constructor (props: UsuarioProps) {
        super(props) 
        this.nome = new NomePessoa(props.nome)
        this.email = new Email(props.email)
        this.senha = props.senha
    }  
    
    // Chama o clone para retornar um objeto simples
    clone(novasProps: UsuarioProps): any {
        return super.clone(novasProps); // Retorna um objeto com valores simples
    }
}