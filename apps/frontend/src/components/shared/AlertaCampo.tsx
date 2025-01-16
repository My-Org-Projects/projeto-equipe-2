import React, { useState } from "react";

const AlertaCampo = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <span
        className="text-red-500 flex justify-center items-center cursor-pointer "
        onMouseEnter={() => setIsVisible(true)} // Mostra o modal ao passar o mouse
        onMouseLeave={() => setIsVisible(false)} // Esconde o modal ao sair
      >
        *
      </span>

      {isVisible && (
        <div className="absolute bottom-full mb-1 left-0 bg-zinc-950 border  p-2 rounded shadow-lg">
          Este campo é obrigatório
        </div>
      )}
    </div>
  );
};

export default AlertaCampo;
