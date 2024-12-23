"use client";

import Link from "next/link";
import CaixaFormularios from "../shared/CaixaFormularios";
import CampoEmail from "../shared/CampoEmail";
import CampoSenha from "../shared/CampoSenha";
import Logo from "../shared/Logo";
import GoogleAuth from "./GoogleAuth";
import Botao from "../shared/Botao";
import useFormAuth from "@/data/hooks/useFormAuth";

export default function FormAuth() {
  const { email, senha, alterarEmail, alterarSenha, submeter } = useFormAuth();

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <CaixaFormularios>
        <div className="flex flex-col items-center">
          <Logo />
          <span className="text-2xl font-bold">Entre com sua conta</span>
        </div>
        <CampoEmail value={email} onChangeText={alterarEmail} modo="login" />
        <CampoSenha value={senha} onChangeText={alterarSenha} modo="login" />
        <div className="flex justify-end text-sm font-normal text-[#979797] ">
          <Link href="/alterarSenha">Esqueceu a senha?</Link>
        </div>
        <Botao onClick={submeter} cor="verde">
          Login{" "}
        </Botao>
        <div className="flex items-center justify-center">
          <div className="border-t border-zinc-500 flex-grow"></div>
          <span className="px-2 text-zinc-600">OU</span>
          <div className="border-t border-zinc-500 flex-grow "></div>
        </div>
        <GoogleAuth />
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div>
              Ainda não possui conta?{" "}
              <span className="text-[#22C55E] text-lg font-normal">
                Cadastre-se
              </span>{" "}
              <Link
                href="/cadastro"
                className="underline text-[#22C55E] text-lg font-normal"
              >
                aqui
              </Link>
            </div>
            <span className="text-xs font-extralight text-zinc-500">
              ou faça Login pelo Google clicando no G acima
            </span>
          </div>
        </div>
      </CaixaFormularios>
    </div>
  );
}
