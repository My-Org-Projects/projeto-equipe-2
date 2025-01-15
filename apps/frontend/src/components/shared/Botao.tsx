import React from "react";

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  cor?: "azul" | "verde" | "vermelho" | "preto";
  tipo?: "login" | "app";
}

const Botao = ({ children, cor, tipo, className, ...rest }: BotaoProps) => {
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
        min-h-[52px]
        rounded-xl  
        font-bold

        ${className} // Permite adicionar classes adicionais
      `}
      {...rest} // Passa todas as outras props para o botão
    >
      {children}
    </button>
  );
};

export default Botao;
