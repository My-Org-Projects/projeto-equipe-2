import EmConstrução from "@/components/shared/EmConstrução";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col  justify-center items-center">
        <EmConstrução />
        <span className="-mt-5">Em construção</span>
      </div>
    </div>
  );
};

export default page;
