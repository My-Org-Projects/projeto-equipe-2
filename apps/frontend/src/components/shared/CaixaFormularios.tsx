
export interface CaixaFormulariosProps{
    children: any
}
export default function CaixaFormularios(props: CaixaFormulariosProps) {
    return (
        <div className= "flex flex-col w-[631px] h-[748px] rounded-md bg-[#1E1E1E] py-5 pb-5 px-14 gap-4 bg-opacity-80">            
             {props.children}
        </div>
    )
}