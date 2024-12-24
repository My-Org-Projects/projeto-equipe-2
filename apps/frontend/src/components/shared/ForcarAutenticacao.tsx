'use client'
import useSessao from "@/data/hooks/useSessao"
import { usePathname, useRouter } from "next/navigation"
import Processando from "./Processando"

export default function ForcarAutenticacao( props: any) {
    const {usuarioDto, carregando} = useSessao()
    const router = useRouter()
    const caminho = usePathname()
        
    if(carregando && !usuarioDto?.email) return <Processando/>
    if(!usuarioDto?.email) {
        router.push(`/entrar?destino=${caminho}`);        
        return <Processando/>
    }

    return props.children
} 