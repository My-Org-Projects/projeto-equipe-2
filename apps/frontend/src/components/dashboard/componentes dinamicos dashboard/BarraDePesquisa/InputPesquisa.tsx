import { IconSearch, IconX } from "@tabler/icons-react";
import React from "react";

const InputPesquisa = () => {
  return (
    <div className="flex flex-1 bg-black p-2 rounded-xl border border-white/20  gap-2">
      <IconSearch />
      <input type="text" className="flex-1 bg-transparent focus:outline-none" />
      <IconX className="text-white/60" />
    </div>
  );
};

export default InputPesquisa;
