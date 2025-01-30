"use client";

import ContextoSessao from "@/data/contexts/ContextoSessao";
import useFormAuth from "@/data/hooks/useFormAuth";
import Image from "next/image";
import React, { useContext, useState } from "react";

type UserDataActionMenu = {
  NomeUsuario?: string;
  EmailUsuario?: string;
  ImagemUsuario?: string;
};

const UserDataActionMenu = ({
  NomeUsuario,
  EmailUsuario,
  ImagemUsuario,
}: UserDataActionMenu) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const { encerrarSessao } = useContext(ContextoSessao);

  return (
    <div
      className="relative"
      onMouseEnter={() => toggleMenu()}
      onMouseLeave={() => toggleMenu()}
    >
      <div
        className="flex gap-2 justify-center items-center cursor-pointer  p-2"
        // onClick={toggleMenu}
      >
        <div className="relative w-12 h-12">
          <Image
            src={ImagemUsuario ?? "/gridwhitepng.png"}
            alt="Imagem Usuario"
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold">
            {NomeUsuario ?? "Eu usuario"}
          </span>
          <span className="text-white/60 text-base">
            {EmailUsuario ?? "usuario@gmail.com"}
          </span>
        </div>
      </div>
      {/* Menu que aparece quando isOpen for verdadeiro */}
      {isOpen && (
        <div className="absolute top-full left-0  w-[200px] bg-[#18181B] text-white p-4 rounded-xl shadow-xl">
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer" onClick={() => encerrarSessao()}>
              Sair
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDataActionMenu;
