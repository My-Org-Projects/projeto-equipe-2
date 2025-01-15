"use client";

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import NomeCampo from "./NomeCampo";

export interface CampoSenhaProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
  name?: string;
}

export default function CampoConfirmarSenhaCadastro(props: CampoSenhaProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function alterarMostrarSenha() {
    setMostrarSenha(!mostrarSenha);
  }
  return (
    <div>
      <NomeCampo nome={props.name ?? "Confirme sua Senha"} />
      <div className="flex input outline-1">
        <input
          type={mostrarSenha ? "text" : "password"}
          value={props.value}
          onChange={(e) => {
            props.onChange?.(e);
            props.onChangeText?.(e.target.value);
          }}
          placeholder={props.placeholder}
          className="flex-1 outline-none bg-transparent "
        />

        {mostrarSenha ? (
          <div className="flex justify-center items-center">
            <IconEye onClick={alterarMostrarSenha} className="text-zinc-400" />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <IconEyeOff
              onClick={alterarMostrarSenha}
              className="text-zinc-400"
            />
          </div>
        )}
      </div>
    </div>
  );
}
