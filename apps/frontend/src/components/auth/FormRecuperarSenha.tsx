"use client";

import React from "react";
import Botao from "../shared/Botao";
import CampoEmail from "../shared/CampoEmail";
import useFormRecuperarSenha from "@/data/hooks/useFormRecuperarSenha";


const FormRecuperarSenha = () => {
  const {email , alterarEmail, submeter } = useFormRecuperarSenha()

  return (    
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="w-[631px] h-[339px] bg-[#18181B] rounded-xl flex justify-center items-center flex-col gap-5">
        <div className="w-[243px] h-[35px] flex flex-col">
          <span className="font-bold text-xl">Solicitar troca de senha</span>
        </div>
        <div className="w-[494px] h-[159px]  flex flex-col gap-7">
          <CampoEmail value={email} onChangeText={alterarEmail} modo="cadastro" />
          <Botao onClick={submeter} cor="verde">Login</Botao>
        </div>
      </div>
    </div>
  );
};

export default FormRecuperarSenha;
