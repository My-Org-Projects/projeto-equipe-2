import FormMudarSenha from "@/components/auth/FormMudarSenha";

import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center container h-screen">
      <Suspense >
      <FormMudarSenha />
      </Suspense>
    </div>
  );
};

export default page;
