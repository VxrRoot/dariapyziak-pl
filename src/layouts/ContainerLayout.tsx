import React, { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-5 h-full w-full mx-auto md:px-6 lg:px-16 max-w-[1920px]">
      {children}
    </div>
  );
};

export default ContainerLayout;
