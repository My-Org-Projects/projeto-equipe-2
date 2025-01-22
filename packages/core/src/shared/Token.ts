export default class Token {    
   
    readonly token: string
    
    constructor(token: string) {
        if(!Token.isValid(token)){
            throw new Error('Token inválido Deve ser um código de 6 digitos alfanumérico')
        }
        this.token = token.trim()
    }

    static gerarToken() {
        const caracteresValidos= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let token = ''
        for (let i =0; i<6; i++) {
            const randomIndex =Math.floor(Math.random() * caracteresValidos.length)
            token += caracteresValidos[randomIndex]
        }
        return new Token (token)
    }

    static isValid(token :string) {
        const regex = /^[A-Z0-9]{6}$/
        return regex.test(token)
    }
    
}