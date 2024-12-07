export interface NomeCampoProps {
    nome: string
}

export default function NomeCampo (props: NomeCampoProps) {
    return (
        <span className="font-light text-sm p-1">{props.nome}</span>        
    )
}