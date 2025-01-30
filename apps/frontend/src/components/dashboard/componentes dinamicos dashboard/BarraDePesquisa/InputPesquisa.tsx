import { IconSearch, IconX } from "@tabler/icons-react";
import React from "react";

type InputPesquisaProps = {
  filtro: string;
  setFiltro: (valor: string) => void;
};

const InputPesquisa = ({ filtro, setFiltro }: InputPesquisaProps) => {
  return (
    <div className="flex flex-1 bg-black p-2 rounded-xl border border-white/20 gap-2">
      <IconSearch />
      <input
        type="text"
        className="flex-1 bg-transparent focus:outline-none text-white"
        placeholder="Digite para pesquisar..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      {filtro && (
        <IconX
          className="text-white/60 cursor-pointer"
          onClick={() => setFiltro("")}
        />
      )}
    </div>
  );
};

export default InputPesquisa;
