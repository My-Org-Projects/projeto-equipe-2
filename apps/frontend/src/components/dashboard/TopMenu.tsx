import Logo from "@/components/shared/Logo";
import React from "react";
import ActionTopMenu from "./ActionTopMenu";

const TopMenu = () => {
  return (
    <div className="h-[166px] bg-black flex items-center pt-9 pl-12">
      <Logo />
      <div className="flex justify-between flex-1 bg-black h-full items-center -mt-10">
        <span className="text-[#F5F5F5] text-2xl ml-11">Administrador</span>
        <ActionTopMenu />
      </div>
    </div>
  );
};

export default TopMenu;
