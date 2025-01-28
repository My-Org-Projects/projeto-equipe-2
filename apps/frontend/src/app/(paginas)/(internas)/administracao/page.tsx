"use client";

import MenuItem from "@/components/dashboard/MenuItem";
import useAPI from "@/data/hooks/useAPI";
import { IconCube } from "@tabler/icons-react";

export default function Page() {
  const { httpGet } = useAPI();

  async function executar() {
    const resp = await httpGet("/administracao");
    console.log(resp);
  }
  return (
    // CONTEUDO DO MAIN
    <div className="flex flex-col justify-center items-center">
      RENDERED LIST
    </div>
  );
}
