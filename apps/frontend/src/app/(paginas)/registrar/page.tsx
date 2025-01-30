"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import FormRegistrar from "@/components/auth/FormRegistrar";
import CaixaFormularios from "@/components/shared/CaixaFormularios";
import ContextoSessao from "@/data/contexts/ContextoSessao";

const Page = () => {
  const router = useRouter();
  const { carregando, token } = useContext(ContextoSessao); // Obtém o token e o carregamento do contexto

  useEffect(() => {
    if (!carregando && token) {
      // Se o token estiver presente e carregado, redireciona para /administracao
      router.push("/administracao");
    }
  }, [carregando, token, router]);

  if (carregando) {
    // Exibe uma mensagem de carregamento enquanto o estado de carregamento estiver verdadeiro
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <CaixaFormularios>
        <FormRegistrar />
      </CaixaFormularios>
    </div>
  );
};

export default Page;
