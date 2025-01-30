import { useEffect, useState } from "react";
import useAPI from "./useAPI";
import { useRouter } from "next/navigation";

export default function useFormRecuperarSenha () {
    const { httpPost } = useAPI()
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setConfirmarSenha] = useState('')    
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [mensagem, setMensagem] = useState<string | null>(null); // Estado para exibir mensagens de feedback
    const router = useRouter()
    const [erroSenha, setErroSenha] = useState<string>("");      
    
    function rotearPara(rota: string, tempo: number) {
        setTimeout(() => {
            router.push(rota);
        }, tempo);
    }     

    function limparFormulario() {        
        setSenha('');
        setConfirmarSenha('');
    }
    
    function verificarSenha() {
        if (!(senha === senhaConfirmada)) {
          setErroSenha("As senhas não coincidem");
          throw new Error("As senhas não coincidem");
        }
    }
    
    async function submeter (){
        verificarSenha();
        try {
            const response = await httpPost('auth/alterarSenhaEsquecida',{ 
                senha,
                token,
                email
            })            
            
            if (response.statusCode === 201) {
                setMensagem(`Senha alterada com sucesso`);                  
                rotearPara('/entrar',3000)
            } else {
                setMensagem(`Erro: ${response.message}`);
                rotearPara('/recuperar-senha',3000)
            }
            limparFormulario() 
                     
        } catch (error: any) {
            // Tratamento de erros da API
            if (error.response && error.response.data && error.response.data.message) {
                setMensagem(`Erro: ${error.response.data.message}`);
            } else {
                setMensagem('Ocorreu um erro ao tentar alterar a Senha. Tente novamente!');
            }
        }
    }  

    return {        
        mensagem,
        senha,
        setSenha,
        senhaConfirmada,
        setConfirmarSenha,
        erroSenha,
        setErroSenha,
        token,
        setToken,
        email,
        setEmail,
        submeter,
    }
}