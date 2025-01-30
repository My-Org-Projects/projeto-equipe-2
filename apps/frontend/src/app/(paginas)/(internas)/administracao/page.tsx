"use client";

import BarraDePesquisa from "@/components/dashboard/componentes dinamicos dashboard/BarraDePesquisa/BarraDePesquisa";
import ListaUsuarios from "@/components/dashboard/componentes dinamicos dashboard/ListaUsuarios";
import MenuItem from "@/components/dashboard/MenuItem";
import useAPI from "@/data/hooks/useAPI";
import useListarTodosUsuarios from "@/data/hooks/useListarTodosUsuarios";
import { IconCube } from "@tabler/icons-react";

export default function Page() {
  return (
    // CONTEUDO DO MAIN
    <div className="flex flex-col justify-center items-center p-4">
      <ListaUsuarios />
    </div>
  );
}
