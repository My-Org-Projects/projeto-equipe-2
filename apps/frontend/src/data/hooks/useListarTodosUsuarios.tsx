import { useState } from "react";
import useAPI from "./useAPI";
import useSessao from "./useSessao";
import { useRouter } from "next/navigation";

export default function useListarTodosUsuarios() {
  const { httpGet } = useAPI();

  async function submeter() {
    const usuarios = await httpGet("auth/listarTodosUsuarios");
    return usuarios;
  }

  return {
    submeter,
  };
}
