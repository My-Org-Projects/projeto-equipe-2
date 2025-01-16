"use client";
import React from "react";
import CampoNome from "../shared/CampoNome";
import CampoEmail from "../shared/CampoEmail";
import CampoSenha from "../shared/CampoSenha";
import Botao from "../shared/Botao";
import Link from "next/link";
import useRegistrar from "@/data/hooks/useRegistrar";
import { PhoneInput } from "../shared/shad components/PhoneInput";
import CampoConfirmarSenhaCadastro from "../shared/CampoConfirmarSenhaCadastro";

const FormRegistrar = () => {
  const {
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    senhaConfirmada,
    setSenhaConfirmada,
    telefone,
    setTelefone,
    handleSubmit,
    erroSenha,
  } = useRegistrar();

  return (
    <form
      className="flex flex-col gap-5 p-5 justify-center flex-1"
      onSubmit={handleSubmit}
    >
      <span className="font-bold text-xl flex items-center justify-center">
        Cadastrar
      </span>
      <div className="flex flex-col gap-5 ">
        <CampoNome value={nome} onChange={(e) => setNome(e.target.value)} />
        <CampoEmail value={email} onChange={(e) => setEmail(e.target.value)} />
        <CampoSenha value={senha} onChange={(e) => setSenha(e.target.value)} />
        <CampoConfirmarSenhaCadastro
          erroSenha={erroSenha}
          name="Senha"
          onChange={(e) => setSenhaConfirmada(e.target.value)}
        />

        <div className="flex flex-col mt-4">
          <PhoneInput defaultCountry="BR" onChange={(e) => setTelefone(e)} />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <Botao type="submit" cor="verde">
          Cadastrar-se
        </Botao>
        <div className="flex text-lg justify-center items-center gap-1">
          <span className="">Já possui conta?</span>
          <Link className="text-[#22C55E]" href={"/entrar"}>
            Faça Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default FormRegistrar;
