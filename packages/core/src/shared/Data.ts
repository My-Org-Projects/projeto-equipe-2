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
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            throw new Error(`Data Invalida: ${dateString}`);
        }
        return new Data(date);
    }
}    