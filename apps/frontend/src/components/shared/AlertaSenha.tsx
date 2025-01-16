import React, { useState } from "react";

const AlertaSenha = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center cursor-help w-6 bg-blue-300"
      onMouseEnter={() => setIsVisible(true)} // Mostra o modal ao passar o mouse
      onMouseLeave={() => setIsVisible(false)} // Esconde o modal ao sair
    >
      <span className="text-red-500 flex justify-center items-center ">*</span>

      {isVisible && (
        <div className="absolute bottom-full mb-1 left-0 bg-zinc-950 border p-2 rounded shadow-lg whitespace-nowrap">
          As senhas precisam ser iguais
        </div>
      )}
    </div>
  );
};

export default AlertaSenha;
