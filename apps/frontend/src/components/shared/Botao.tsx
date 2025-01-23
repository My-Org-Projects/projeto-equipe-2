interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  cor?: "azul" | "verde" | "vermelho" | "preto";
  tipo?: "login" | "app";
  onClick?: () => Promise<void> | void;
}

const Botao = ({ children, cor, tipo, onClick, ...props }: BotaoProps) => {
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
      {...props}
      className={`
  ${corClasse}
  w-full 
  ${altura}
  min-h-[52px]
  rounded-lg
  bg-botao-preto 
  font-bold
  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Botao;
