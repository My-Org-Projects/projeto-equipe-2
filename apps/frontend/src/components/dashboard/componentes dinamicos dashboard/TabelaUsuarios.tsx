import { mocked_users } from "@/data/constants/mocked_users";
import React from "react";
import { UsuarioLista } from "./ListaUsuarios";

type TabelaUsuariosProps = {
  usuarios: UsuarioLista[];
};

const TabelaUsuarios = ({ usuarios }: TabelaUsuariosProps) => {
  return (
    <div className="w-full text-white rounded-xl overflow-hidden">
      {/* Cabeçalho da Tabela */}
      <div className="grid grid-cols-5 bg-[#27272A] p-3 font-bold ">
        <div>Nome</div>
        <div>Email</div>
        <div>Ativo</div>
        <div>Telefone</div>
        <div>Data de criação</div>
      </div>

      {/* Corpo da Tabela */}
      {usuarios.map((user, index) => (
        <div
          key={index}
          className="grid grid-cols-5 bg-[#09090B] p-3 border-b border-[#3A3A3A] text-white/20 "
        >
          <div>{user.nome}</div>
          <div>{user.email}</div>
          <div>{user.ativo ? "Sim" : "Não"}</div>
          <div>{user.telefone}</div>
          <div>{user.criadoEm}</div>
        </div>
      ))}
    </div>
  );
};

export default TabelaUsuarios;
