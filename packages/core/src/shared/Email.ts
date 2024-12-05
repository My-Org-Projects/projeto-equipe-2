export default class Email {
    
    static isValido(email: string): boolean {
        return false
    }
    readonly email :string
    
    constructor(email: string) {
        this.email = email.trim()
    }
}