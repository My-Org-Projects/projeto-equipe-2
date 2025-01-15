export default class UsuarioDto {
    id: string;  
   
    nome: string;  
  
    email: string;  
   
    senha: string; 

    telefone :string;
    // Data de criação da conta
    //criadoEm: Date;
  
    // Data de última atualização dos dados
    //atualizadoEm: Date;
  
    // Função para inicializar o DTO a partir de um objeto de dados
    constructor(partial: Partial<UsuarioDto>) {
      Object.assign(this, partial);
    }
  }