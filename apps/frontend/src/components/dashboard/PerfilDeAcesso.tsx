import { IconSelector } from "@tabler/icons-react";
import React from "react";

const PerfilDeAcesso = () => {
  return (
    <div className="flex justify-center items-center h-[41px] w-full ">
      <div className="bg-[#27272A] h-full w-56  flex justify-around items-center rounded-xl">
        <span className="text-[#979797] font-semibold">Perfil de Acesso</span>
        <IconSelector className="text-[#979797]" />
      </div>
    </div>
  );
};

export default PerfilDeAcesso;
