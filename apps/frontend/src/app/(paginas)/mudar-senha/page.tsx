import FormMudarSenha from "@/components/auth/FormMudarSenha";
import FormRecuperarSenha from "@/components/auth/FormRecuperarSenha";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center container h-screen">
      <FormMudarSenha />
    </div>
  );
};

export default page;
