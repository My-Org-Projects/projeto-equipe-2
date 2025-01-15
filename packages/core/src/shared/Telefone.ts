export default class Telefone {
    readonly telefone: string;

    constructor(telefone: string | undefined | null) {
        // Garantir que telefone seja uma string, mesmo que seja undefined ou null
        this.telefone = (telefone ?? '').trim(); // Se for null ou undefined, usa string vazia
    }
}