import Logo from "./Logo"

export default function Processando() {
    return (
        <div className = "h-screen">
            <div 
                className="
                    flex flex-col items-center justify-center 
                    h-full gap-2
                "
            >                
                <Logo/>
                <span className="font-light text-zinc-400">  Processando... </span>
            </div>
        </div>   
        
    )
}