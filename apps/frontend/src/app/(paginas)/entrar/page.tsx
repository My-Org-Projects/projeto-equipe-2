"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
// Importe o contexto de sessão
import FormAuth from "@/components/auth/FormAuth";
import ContextoSessao from "@/data/contexts/ContextoSessao";

export default function Page() {
  const router = useRouter();
  const { carregando, token } = useContext(ContextoSessao); // Obtém o token e o carregamento do contexto

  useEffect(() => {
    if (!carregando && token) {
      // Se o token estiver presente e carregado, redireciona para /administracao
      router.push("/administracao");
    }
  }, [carregando, token, router]);

  if (carregando) {
    // Caso o estado de carregamento ainda esteja em andamento, podemos retornar algum indicador de carregamento, se necessário
    return <div>Carregando...</div>;
  }

  return <FormAuth />;
}
