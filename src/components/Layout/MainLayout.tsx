import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import BaseSeo from "../Seo/BaseSeo";
import Navbar from "./Navbar";
import { menuType } from "@/lib/types";

const MainLayout = ({
  children,
  navData,
  footerData,
}: {
  children: React.ReactNode;
  navData: menuType;
  footerData: menuType;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <BaseSeo />
      <Navbar navMenus={navData.menus} />
      {children}
    </LazyMotion>
  );
};

export default MainLayout;
