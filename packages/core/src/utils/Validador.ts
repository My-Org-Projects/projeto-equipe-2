export default class Validador {

    
    static NaoNulo (valor: any, erro :string) : string | null {
        return valor !== null && valor !== undefined ? null : erro
    }
}