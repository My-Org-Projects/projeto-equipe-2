import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import NomeCampo from "./NomeCampo";

export interface CampoSenhaProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
}

export default function CampoSenha(props: CampoSenhaProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function alterarMostrarSenha() {
    setMostrarSenha(!mostrarSenha);
  }
  return (
    <div>
      <NomeCampo nome="Senha" />
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
          <IconEye onClick={alterarMostrarSenha} className="text-zinc-400" />
        ) : (
          <IconEyeOff onClick={alterarMostrarSenha} className="text-zinc-400" />
        )}
      </div>
    </div>
  );
}
