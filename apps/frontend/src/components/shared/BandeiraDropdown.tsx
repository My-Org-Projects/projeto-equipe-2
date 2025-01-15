"use client";

import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const BandeiraDropdown = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-red-200 flex justify-center items-center p-4">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(e) => setSelected(e)}
        className="text-xl" // Ajuste o tamanho do texto conforme necessário
        countries={["US", "GB", "BR", "CA"]} // Exemplo de países, você pode ajustar a lista
      />
    </div>
  );
};

export default BandeiraDropdown;
