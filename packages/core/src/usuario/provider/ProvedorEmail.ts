export default interface ProvedorEmail {
    enviarEmail(email: string, assunto: string, mensagem: string): Promise<void>    
}