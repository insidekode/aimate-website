import React from "react";
import BaseSeo from "../Seo/BaseSeo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <BaseSeo />
      {children}
    </div>
  );
};

export default MainLayout;
