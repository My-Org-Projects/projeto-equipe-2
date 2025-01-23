import React, { useState } from "react";
import useAPI from "./useAPI";
import { useRouter } from "next/navigation";

const useRegistrar = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [senhaConfirmada, setSenhaConfirmada] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [erroSenha, setErroSenha] = useState<string>("");

  const { httpPost } = useAPI();
  const router = useRouter();

  function limparFormulario() {
    setNome("");
    setEmail("");
    setSenha("");
    setTelefone("");
  }

  function verificarSenha() {
    if (senha === senhaConfirmada) {
      return;
    } else {
      setErroSenha("As senhas não coincidem");
      throw new Error("As senhas não coincidem");
    }
  }

  async function submeter() {
    verificarSenha();

    try {
      const resposta = await httpPost("auth/registrar", {
        nome,
        email,
        senha,
        telefone,
      });

      const temStatusCode: boolean = resposta.statusCode;

      if (!temStatusCode) {
        limparFormulario();
        router.push("/entrar");
      }

      console.log("Fim Try UseRegister REQ to useAPI");
    } catch (erro) {
      console.error(erro);
    }
  }

  return {
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
    submeter,
    erroSenha,
  };
};

export default useRegistrar;
