import LeftMenu from "@/components/dashboard/LeftMenu";
import TopMenu from "@/components/dashboard/TopMenu";
import React, { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="w-full h-[calc(100vh-166px-45px)] pr-11 pb-11">
      <TopMenu />
      <div className="flex bg-black">
        <LeftMenu />
        <div className="bg-[#18181B] h-[calc(100vh-166px-45px)] flex-1 rounded-xl w-4/6 flex justify-center items-start pt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
