import Data from "../../shared/Data";
import Email from "../../shared/Email";
import Entidade, { EntidadeProps } from "../../shared/Entidade";
import NomePessoa from "../../shared/NomePessoa";
import Telefone from "../../shared/Telefone";
import Token from "../../shared/Token";

export interface UsuarioProps extends EntidadeProps {   
    nome?: string
    email: string
    senha?: string
    telefone?: string
    criadoEm?: string
    token?: string
    dataValidadeToken?: string
    ativo?:boolean
}

export default class Usuario extends Entidade<Usuario, UsuarioProps > {
    readonly nome: NomePessoa
    readonly email: Email
    readonly senha: string
    readonly ativo: boolean
    readonly telefone: Telefone
    readonly criadoEm: Data
    readonly token: Token   
    readonly dataValidadeToken: Data 

    constructor (props: UsuarioProps) {
        super(props) 
        this.nome = new NomePessoa(props.nome)
        this.email = new Email(props.email)
        this.telefone = new Telefone(props.telefone)
        this.criadoEm = Data.create(props.criadoEm)
        this.ativo=true
        this.senha = props.senha
        this.token = null
        this.dataValidadeToken = Data.create(props.dataValidadeToken)
    }  
    
    // Chama o clone para retornar um objeto simples
    clone(novasProps: UsuarioProps): any {
        return super.clone(novasProps); // Retorna um objeto com valores simples
    }

    obterToken ():string{
      return  Token.gerarToken().token;      
    }    
}