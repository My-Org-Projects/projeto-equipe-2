"use client";

import React, { useEffect } from "react";
import Botao from "../shared/Botao";
import CampoNovaSenha from "../shared/CampoNovaSenha";
import CampoConfirmarNovaSenha from "../shared/CampoConfirmarSenha";
import useFormRecuperarSenha from "@/data/hooks/useFormAlterarSenhaEsquecida";
import { useSearchParams } from "next/navigation";

 
 const FormMudarSenha = () => {
  const searchParams = useSearchParams();
  const {  mensagem, senha, setSenha, senhaConfirmada, setConfirmarSenha, token, setToken, email, setEmail, erroSenha, setErroSenha, submeter} = useFormRecuperarSenha( ) 

  useEffect(() => {
    setToken(searchParams.get("token"));
    setEmail(searchParams.get("email"));
  }, []);

  // Se os parâmetros ainda não estiverem disponíveis, evite renderizar o componente
  // if (!token || !email) {
  //   return <p>Carregando...</p>; // Evita erro de renderização estática
  // } 
  
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="w-[631px] h-[339px] bg-[#18181B] rounded-xl flex justify-center items-center flex-col gap-5 p-16">
        <h2 className="font-bold text-xl">Altere sua senha</h2>
        <div className=" flex flex-col  w-full h-fit gap-2">
          <CampoNovaSenha value={senha} onChangeText={setSenha} />
          <CampoConfirmarNovaSenha value={senhaConfirmada} onChangeText={setConfirmarSenha}/>
        </div>
        <Botao onClick={submeter} cor="verde">Mudar Senha</Botao>
      </div>
      {mensagem && (
          <span
            className={`font-medium text-sm ${mensagem.toLowerCase().includes('erro') ? 'text-red-400' : 'text-green-400'}`}
          >
            {mensagem}
        </span>)}
    </div>
  );
};

export default FormMudarSenha;
