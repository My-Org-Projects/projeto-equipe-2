"use client";

import React from "react";
import CampoNome from "../shared/CampoNome";
import CampoEmail from "../shared/CampoEmail";
import CampoSenha from "../shared/CampoSenha";
import CampoNovaSenha from "../shared/CampoNovaSenha";
import CampoTelefone from "../shared/CampoTelefone";
import Botao from "../shared/Botao";

const FormRegistrar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col p-5">
        <CampoNome />
        <CampoEmail />
        <CampoSenha />
        <CampoNovaSenha />
        <CampoTelefone />
      </div>
      <div className="bg-red-400">
        <Botao>Cadastrar-se</Botao>
      </div>
    </div>
  );
};

export default FormRegistrar;
