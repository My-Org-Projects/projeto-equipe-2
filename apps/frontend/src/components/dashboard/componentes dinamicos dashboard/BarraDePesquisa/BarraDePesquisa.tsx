import React from "react";
import InputPesquisa from "./InputPesquisa";

type BarraDePesquisaProps = {
  filtro: string;
  setFiltro: (valor: string) => void;
};

const BarraDePesquisa = ({ filtro, setFiltro }: BarraDePesquisaProps) => {
  return (
    <div className="bg-[#09090B] w-[708px] h-[57px] flex gap-7 justify-center items-center p-2 border border-white/20 rounded-xl">
      <span className="text-lg text-[#F5F5F5] ml-4">Pesquisar Usuários</span>
      <InputPesquisa filtro={filtro} setFiltro={setFiltro} />
    </div>
  );
};

export default BarraDePesquisa;
