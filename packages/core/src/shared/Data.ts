export default class Data {
    private readonly date: Date;

    private constructor(date: Date) {
        this.date = date;
    }

     /**
     * Fabrica método para criação de uma instancia de Data
     * @param dateString - A date string in ISO 8601 format (e.g., "2025-01-19")
     * @throws Error if the date is invalid.
     */
     public static create(dateString: string): Data {
        
        const utcDate = new Date(dateString);
        if (isNaN(utcDate.getTime())) {
            throw new Error(`Data Invalida: ${dateString}`);
        }

        // Ajustar para o horário de São Paulo (UTC-3)
        const offset = -3 * 60 * 60000; // Brasília UTC-3
        const dateInSaoPaulo = new Date(utcDate.getTime() + offset);

        return new Data(dateInSaoPaulo);
       
    }

    public toISOStringSaoPaulo(): string {
        return this.date.toISOString().slice(0, -1); // Retorna sem 'Z', indicando que não é UTC.
    }

    /**
     * Compara a instância atual com outra Data.
     * @param other - Outra instância de Data para comparação.
     * @returns -1 se a instância for menor, 1 se for maior, ou 0 se forem iguais.
     */
    public comparar(outraData: Date): number {
        if (this.date < outraData) {
            return -1;
        } else if (this.date > outraData) {
            return 1;
        } else {
            return 0;
        }
    }
}    