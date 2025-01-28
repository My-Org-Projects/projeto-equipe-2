import Image from "next/image";
import React from "react";

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
  return (
    <div className="flex gap-2 justify-center items-center">
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
  );
};

export default UserDataActionMenu;
