import React from "react";
import { IconMail } from "@tabler/icons-react";
import NomeCampo from "./NomeCampo";
import AlertaCampo from "./AlertaCampo";

export interface CampoEmailProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
  error?: string;
}

const CampoEmail = React.forwardRef<HTMLInputElement, CampoEmailProps>(
  (props, ref) => {
    return (
      <div>
        <div className="flex justify-start items-center">
          <NomeCampo nome="Email" />
          {props.error && <AlertaCampo />}
        </div>
        <div className="flex input items-center outline-1">
          <input
            ref={ref} // Adiciona o ref aqui
            type="email"
            value={props.value}
            onChange={(e) => {
              props.onChange?.(e); // Chamando onChange diretamente
              props.onChangeText?.(e.target.value);
            }}
            placeholder={props.placeholder}
            className="flex-1 outline-none bg-transparent"
          />
          <IconMail size={20} className="text-zinc-400" />
        </div>
      </div>
    );
  }
);

CampoEmail.displayName = "CampoEmail"; // Necessário para debug com forwardRef

export default CampoEmail;
