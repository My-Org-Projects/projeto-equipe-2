import { useState } from "react";
import useAPI from "./useAPI";
import router from "next/router";

export default function useFormRecuperarSenha () {
    const [email, setEmail] = useState('')
    const { httpPost } = useAPI()

    async function submeter (){
        httpPost('auth/recuperarsenha',{ email })            
        
        limparFormulario()    
        router.push('/administracao')
    }
     
    function limparFormulario () {
        setEmail('')            
    }

    return {
        email,
        alterarEmail: setEmail,
        submeter,
    }
}