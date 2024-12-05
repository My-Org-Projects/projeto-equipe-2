export default class NomePessoa {
    readonly nome: string
    
    constructor(nome?: string) {
        this.nome = nome?.trim() ?? ''
    }
}