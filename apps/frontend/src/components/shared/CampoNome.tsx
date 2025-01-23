import React from "react";
import { IconMail, IconSignature } from "@tabler/icons-react";
import NomeCampo from "./NomeCampo";
import AlertaCampo from "./AlertaCampo";

export interface CampoNomeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
  error?: string;
}

const CampoNome = React.forwardRef<HTMLInputElement, CampoNomeProps>(
  (props, ref) => {
    return (
      <div>
        <div className="flex justify-start items-center">
          <NomeCampo nome={"Nome"} />
          {props.error && <AlertaCampo />}
        </div>
        <div className="flex input items-center outline-1">
          <input
            ref={ref} // Adiciona o ref aqui
            type="text"
            value={props.value}
            onChange={(e) => {
              props.onChange?.(e); // Chamando onChange diretamente
              props.onChangeText?.(e.target.value);
            }}
            placeholder={props.placeholder}
            className="flex-1 outline-none bg-transparent"
          />
          <IconSignature size={20} className="text-zinc-400" />
        </div>
      </div>
    );
  }
);

CampoNome.displayName = "CampoNome"; // Necessário para debug com forwardRef

export default CampoNome;
