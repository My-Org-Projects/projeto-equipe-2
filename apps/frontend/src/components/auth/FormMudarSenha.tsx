"use client";

import React from "react";
import Botao from "../shared/Botao";

import CampoNovaSenha from "../shared/CampoNovaSenha";

import CampoConfirmarNovaSenha from "../shared/CampoConfirmarSenha";

const FormMudarSenha = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="w-[631px] h-[339px] bg-[#18181B] rounded-xl flex justify-center items-center flex-col gap-5 p-16">
        <h2 className="font-bold text-xl">Altere sua senha</h2>
        <div className=" flex flex-col  w-full h-fit gap-2">
          <CampoNovaSenha />
          <CampoConfirmarNovaSenha />
        </div>
        <Botao cor="verde">Mudar Senha</Botao>
      </div>
    </div>
  );
};

export default FormMudarSenha;
