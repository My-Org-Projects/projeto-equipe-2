// Identificador único do usuário
  id: string;

  // Nome do usuário
  nome: string;

  // Email do usuário
  email: string;

  // Senha do usuário (geralmente não é incluída em respostas de API, mas pode ser útil para criação ou atualização)
  senha: string; // opcional para permitir criação ou alteração

  telefone: string;

  createdAt: Date;

  // Data de criação da conta
  //criadoEm: Date;

  // Data de última atualização dos dados
  //atualizadoEm: Date;

  // Função para inicializar o DTO a partir de um objeto de dados
  constructor(partial: Partial<UsuarioDto>) {
    Object.assign(this, partial);
  }
}
