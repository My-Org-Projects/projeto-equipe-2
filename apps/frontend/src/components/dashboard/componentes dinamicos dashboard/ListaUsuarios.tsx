import React from "react";
import BarraDePesquisa from "./BarraDePesquisa/BarraDePesquisa";
import TabelaUsuarios from "./TabelaUsuarios";
import { useRouter } from "next/navigation";

const ListaUsuarios = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col justify-center items-center gap-11">
      <BarraDePesquisa />
      <TabelaUsuarios />
    </div>
  );
};

export default ListaUsuarios;
