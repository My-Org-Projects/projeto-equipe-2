import React, { ReactNode } from "react";

type MenuItemProps = {
  label: string;
  icon: ReactNode;
};

const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <div className="h-10 bg-black hover:bg-[#111113] hover:cursor-pointer flex justify-center items-center gap-5">
      <span className="text-white">{icon}</span>
      <span className="text-xl text-white/40">{label}</span>
    </div>
  );
};

export default MenuItem;
