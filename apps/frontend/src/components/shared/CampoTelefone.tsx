"use client";

import { useState } from "react";
import NomeCampo from "./NomeCampo";
import ReactFlagsSelect from "react-flags-select";
import { IconWorld } from "@tabler/icons-react";
import BandeiraDropdown from "./BandeiraDropdown";

export interface CampoNomeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void;
  modo?: string;
}

export default function CampoNome(props: CampoNomeProps) {
  return (
    <div>
      <NomeCampo nome="Telefone" />
      <div className="flex input items-center outline-1">
        <BandeiraDropdown />
        <input
          type="text"
          value={props.value}
          onChange={(e) => {
            props.onChange?.(e);
            props.onChangeText?.(e.target.value);
          }}
          placeholder={props.placeholder}
          className="flex-1 outline-none bg-transparent ml-2"
        />
      </div>
    </div>
  );
}
