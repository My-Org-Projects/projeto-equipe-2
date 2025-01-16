"use client";

import React, { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import NomeCampo from "./NomeCampo";
import AlertaCampo from "./AlertaCampo";

export interface CampoSenhaProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
  error?: string;
}

const CampoSenha = React.forwardRef<HTMLInputElement, CampoSenhaProps>(
  (props, ref) => {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    function alterarMostrarSenha() {
      setMostrarSenha(!mostrarSenha);
    }

    return (
      <div>
        <div className="flex justify-start items-center">
          <NomeCampo nome={"Senha"} />
          {props.error && <AlertaCampo />}
        </div>
        <div className="flex input outline-1">
          <input
            ref={ref} // Adiciona o ref aqui
            type={mostrarSenha ? "text" : "password"}
            value={props.value}
            onChange={(e) => {
              props.onChange?.(e);
              props.onChangeText?.(e.target.value);
            }}
            placeholder={props.placeholder}
            className="flex-1 outline-none bg-transparent"
          />

          {mostrarSenha ? (
            <div className="flex justify-center items-center">
              <IconEye
                onClick={alterarMostrarSenha}
                className="text-zinc-400 cursor-pointer"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <IconEyeOff
                onClick={alterarMostrarSenha}
                className="text-zinc-400 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

CampoSenha.displayName = "CampoSenha"; // Necessário para debug com forwardRef

export default CampoSenha;
