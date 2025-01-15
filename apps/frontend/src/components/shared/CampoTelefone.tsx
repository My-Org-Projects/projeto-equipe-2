import { IconMail, IconSignature } from "@tabler/icons-react";
import NomeCampo from "./NomeCampo";

export interface CampoTelefoneProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
}

export default function CampoTelefone(props: CampoTelefoneProps) {
  return (
    <div>
      <NomeCampo nome="Telefone" />
      <div className="flex input items-center outline-1">
        <input
          type="text"
          value={props.value}
          onChange={(e) => {
            props.onChange?.(e);
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
