import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import BaseSeo from "../Seo/BaseSeo";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <BaseSeo />
      <Navbar />
      {children}
    </LazyMotion>
  );
};

export default MainLayout;
