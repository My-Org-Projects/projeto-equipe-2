'use client'
import { UsuarioDto } from "@projetoequipe2/core";
import { createContext, useCallback, useEffect, useState } from "react";
import cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface Sessao {   
    token: string | null; 
    usuarioDto: UsuarioDto | null; 
}

interface ContextoSessaoProps {
    carregando: boolean //variável para decidir se o usuário já está logado na aplicação
    token: string | null
    usuarioDto: UsuarioDto | null
    iniciarSessao: (token: string) => void
    encerrarSessao: () => void
}



const ContextoSessao = createContext<ContextoSessaoProps>({} as any)
export default ContextoSessao

export function ProvedorSessao (props: any) {
    const nomeCookie = '_projetoequipe2_token'
    
    const [carregando, setCarregando] = useState(true)
    const [sessao, setSessao] = useState<Sessao>({token: null, usuarioDto: null})

    const carregarSessao = useCallback(function () {
        try {
            setCarregando(true)
            const sessao = obterSessao()
            setSessao(sessao)
        } finally {
            setCarregando (false)
        }    
    }, [])

    useEffect( () => {
        carregarSessao()
    },[carregarSessao])

    function iniciarSessao (token: string) {
        cookie.set(nomeCookie, token, { expires: 1 })
        const sessao = obterSessao()
        setSessao(sessao)
        //setCarregando(false)
    }

    function encerrarSessao() {
        cookie.remove(nomeCookie)
        setSessao({ token: null, usuarioDto: null })
    }

    function obterSessao(): Sessao  {
        const token = cookie.get(nomeCookie)

        if(!token) {
            return { token: null, usuarioDto: null}
        }

        try {
            const payload: any = jwtDecode(token)
            const valido = payload.exp! > Date.now() / 1000  //para retornar em milisegundos

            if (!valido ) {
                return { token: null, usuarioDto: null}    
            }

            return {
                token, 
                usuarioDto: {
                id: payload.id,
                nome: payload.nome,
                email: payload.email,
                telefone: payload.telefone,
                senha:'',
                criadoEm:'',
                token:'',
                dataValidadeToken:'',
            }}
        } catch (e) {
            return { token: null, usuarioDto: null}
        }

    }
    return (
       <ContextoSessao.Provider
            value={{
                 carregando,
                 token: sessao.token,
                 usuarioDto: sessao.usuarioDto,
                 iniciarSessao,
                 encerrarSessao,
             }}
       >
           {props.children}
       </ContextoSessao.Provider>      
    )
}