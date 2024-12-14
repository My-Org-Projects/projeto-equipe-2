import { useState } from "react"
import useAPI from "./useAPI"

export default function useFormAuth() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { httpPost } = useAPI()

    function limparFormulario () {
        setEmail('')
        setSenha('')
    }

    async function submeter (){
        const token = await httpPost('auth/login',{ email,senha })            
        console.log(token)
        limparFormulario()    
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