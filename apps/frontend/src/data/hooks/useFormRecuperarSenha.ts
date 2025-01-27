import { useState } from "react";
import useAPI from "./useAPI";
import router from "next/router";

export default function useFormRecuperarSenha () {
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState<string | null>(null); // Estado para exibir mensagens de feedback
    const { httpPost } = useAPI()

    async function submeter (){
        try {
            const response = await httpPost('auth/recuperarsenha',{ email })            
            
            if (response.statusCode === 201) {
                setMensagem(`E-mail enviado para ${email}. Verifique sua caixa de entrada!`);                  
            } else {
                setMensagem(`Erro: ${response.message}`);
            }
            limparFormulario() 
                     
        } catch (error: any) {
            // Tratamento de erros da API
            if (error.response && error.response.data && error.response.data.message) {
                setMensagem(`Erro: ${error.response.data.message}`);
            } else {
                setMensagem('Ocorreu um erro ao tentar enviar o e-mail. Tente novamente!');
            }
        }
    }
     
    function limparFormulario () {
        setEmail('')            
    }

    return {
        email,
        alterarEmail: setEmail,
        mensagem,
        submeter,
    }
}