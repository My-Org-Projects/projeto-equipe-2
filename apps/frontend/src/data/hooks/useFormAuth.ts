import { useState } from "react"
import useAPI from "./useAPI"
import useSessao from "./useSessao"
import { useRouter } from "next/navigation"

export default function useFormAuth() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')    

    const { httpPost } = useAPI()
    const { iniciarSessao } = useSessao()
    const router = useRouter()
    
    function limparFormulario () {
        setEmail('')
        setSenha('')
    }

    async function submeter (){
        const token = await httpPost('auth/login',{ email,senha })            
        iniciarSessao(token)
        limparFormulario()    
        router.push('/administracao')
    }

    return {
        email,
        senha,
        httpPost,
        alterarEmail: setEmail,
        alterarSenha: setSenha, 
        submeter            
    } 
}