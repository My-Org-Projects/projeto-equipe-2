import Id from "./Id";

export interface EntidadeProps {
    id?: string
}

export default abstract class Entidade<Tipo, Props extends EntidadeProps> {
    readonly id?: Id
    readonly props: Props

    constructor (props: Props) {
        this.id =  new Id(props.id)
        this.props = { ...props, id: this.id.valor }
    }

    igual(outraEntidade: Entidade<Tipo, Props>): boolean {
        return this.id.igual(outraEntidade?.id)
    }

    diferente(outraEntidade: Entidade<Tipo, Props>): boolean {
        return this.id.diferente(outraEntidade?.id)
    }

    // clone (novasProps: Props, args: any): Tipo {
    //     return (this.constructor as any)(
    //         { 
    //             id: this.id?.valor,
    //             ...this.props, 
    //             ...novasProps 
    //         }, 
    //         ...args
    //     )
    // }

    clone(novasProps: Props): any {
        return {
          id: this.id?.valor, // Retorna o valor do ID como string
          ...this.props,      // Retorna as propriedades da entidade
          ...novasProps,      // Acrescenta novas propriedades passadas
        }
      }
}