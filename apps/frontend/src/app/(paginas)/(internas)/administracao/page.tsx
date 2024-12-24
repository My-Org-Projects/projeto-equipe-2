'use client'

import Botao from "@/components/shared/Botao"
import useAPI from "@/data/hooks/useAPI"

export default function Page() { 
    const { httpGet } = useAPI()

    async function executar() {   
        const resp = await httpGet('/administracao')
        console.log(resp)
    }
    return (     
         <div className="container h-screen  flex flex-col justify-center items-center">
            <div className="flex flex-col items-center w-96 bg-red-400">
                <h1>Administração</h1>
                <p>Esta é a página de administração</p>
                <div>
                    <Botao onClick={executar} cor="verde"> Executar </Botao>
                </div>
            </div>
        </div>
    )
}