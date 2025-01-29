import { mocked_users } from "@/data/constants/mocked_users";
import React from "react";

const TabelaUsuarios = () => {
  return (
    <div className="w-full text-white rounded-xl overflow-hidden">
      {/* Cabeçalho da Tabela */}
      <div className="grid grid-cols-5 bg-[#27272A] p-3 font-bold ">
        <div>Nome</div>
        <div>Perfil</div>
        <div>Ativo</div>
        <div>Horário de Trabalho</div>
        <div>Dias de Trabalho</div>
      </div>

      {/* Corpo da Tabela */}
      {mocked_users.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-5 bg-[#09090B] p-3 border-b border-[#3A3A3A] text-white/20"
        >
          <div>{item.nome}</div>
          <div>{item.perfil}</div>
          <div>{item.ativo ? "Sim" : "Não"}</div>
          <div>{item.horarioDeTrabalho}</div>
          <div>{item.diasDeTrabalho.join(", ")}</div>
        </div>
      ))}
    </div>
  );
};

export default TabelaUsuarios;
