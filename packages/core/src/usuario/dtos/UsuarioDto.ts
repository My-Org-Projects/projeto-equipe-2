export default class UsuarioDto {
    id: string 
    nome: string
    email: string
    senha: string
    telefone: string   
    criadoEm: string
    token: string
    dataValidadeToken: string
    ativo: boolean
  
    // Função para inicializar o DTO a partir de um objeto de dados
    constructor(partial: Partial<UsuarioDto>) {
      Object.assign(this, partial)
    }
  }