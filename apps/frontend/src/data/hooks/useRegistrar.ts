"use client";
// hooks/useRegistrar.js
import { useState } from "react";

const useRegistrar = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Aqui você pode adicionar validações se necessário

    const data = {
      nome,
      email,
      senha,
      telefone,
    };

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
    telefone,
    setTelefone,
    handleSubmit,
  };
};

export default useRegistrar;
