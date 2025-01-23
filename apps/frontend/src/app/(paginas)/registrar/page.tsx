import FormRegistrar from "@/components/auth/FormRegistrar";
import CaixaFormularios from "@/components/shared/CaixaFormularios";
import CampoNome from "@/components/shared/CampoNome";

import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <CaixaFormularios>
        <FormRegistrar />
      </CaixaFormularios>
    </div>
  );
};

export default page;
