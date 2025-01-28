import MenuItem from "@/components/dashboard/MenuItem";
import PerfilDeAcesso from "@/components/dashboard/PerfilDeAcesso";
import { IconClipboardList, IconCube, IconUser } from "@tabler/icons-react";
import React from "react";

const LeftMenu = () => {
  return (
    <div className="bg-black w-[300px] flex flex-col gap-10">
      <PerfilDeAcesso />
      <div className="flex flex-col gap-2">
        <MenuItem label="Gerenciar" icon={<IconUser />} />
        <MenuItem label="Visualizar" icon={<IconCube />} />
        <MenuItem label="Relatório" icon={<IconClipboardList />} />
      </div>
    </div>
  );
};

export default LeftMenu;
