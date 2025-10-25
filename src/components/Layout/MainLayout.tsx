import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import BaseSeo from "../Seo/BaseSeo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <BaseSeo />
      {children}
    </LazyMotion>
  );
};

export default MainLayout;
