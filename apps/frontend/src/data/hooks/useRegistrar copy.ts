"use client";

import { useRouter } from "next/navigation";
// hooks/useRegistrar.js
import { useState } from "react";

const useRegistrar = () => {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senhaConfirmada, setSenhaConfirmada] = useState("");
  const [erroSenha, setErroSenha] = useState(""); // Estado para erro de senha

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(event);

    // Aqui você pode adicionar validações se necessário

    const data = {
      nome,
      email,
      senha,
      telefone,
    };

    if (senha !== senhaConfirmada) {
      setErroSenha("Senhas diferentes");
      throw new Error("Senhas diferentes");
    } else {
      setErroSenha("");
    }
    try {
      const response = await fetch("http://localhost:4000/auth/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar");
      }

      // Aqui você pode lidar com a resposta do servidor (ex: redirecionar ou mostrar mensagem de sucesso)
      console.log("Usuário registrado com sucesso!");

      router.push("/entrar");
    } catch (error) {
      console.error("Falha ao registrar:", error);
    }
  };

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
    handleSubmit,
    erroSenha,
  };
};

export default useRegistrar;
