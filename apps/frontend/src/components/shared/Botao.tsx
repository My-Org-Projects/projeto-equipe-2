import React from "react";

interface BotaoProps {
  children: React.ReactNode;
  cor?: "azul" | "verde" | "vermelho" | "preto";
  tipo?: "login" | "app";
}

const Botao = ({ children, cor, tipo }: BotaoProps) => {
  const altura = tipo === "login" ? "h-[52px]" : "h-[47px]";
  const corClasse =
    cor === "azul"
      ? "bg-botao-azul"
      : cor === "verde"
        ? "bg-botao-verde"
        : cor === "vermelho"
          ? "bg-botao-vermelho"
          : "bg-botao-preto";

  return (
    <button
      className={`
  ${corClasse}
  w-full 
  ${altura}
  h-[52px] 
  rounded-lg
  bg-botao-preto 
  font-bold
  `}
    >
      {children}
    </button>
  );
};

export default Botao;
