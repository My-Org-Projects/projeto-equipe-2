import { IconSearch } from "@tabler/icons-react";
import React from "react";
import Separador from "./Separador";
import UserDataActionMenu from "./UserDataActionMenu";

const ActionTopMenu = () => {
  return (
    <div className="flex justify-center items-center gap-6   p-2">
      <div className="w-fit h-fit p-2 bg-[#171717] rounded-full -mr-2">
        <IconSearch />
      </div>
      <div className="flex p-2 justify-center items-center gap-6">
        <Separador />
        <UserDataActionMenu />
      </div>
    </div>
  );
};

export default ActionTopMenu;
