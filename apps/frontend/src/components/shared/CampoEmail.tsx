import { IconMail } from "@tabler/icons-react";
import NomeCampo from "./NomeCampo";

export interface CampoEmailProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo : string;
}

export default function CampoEmail(props: CampoEmailProps) {
  return (
    <div>
      <NomeCampo nome="Email" />
      <div className="flex input items-center outline-1">
        <input
          type="email"
          value={props.value}
          onChange={(e) => {
            props.onChange?.(e);
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
